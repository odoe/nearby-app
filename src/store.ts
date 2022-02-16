import { defineStore } from 'pinia'
import { ItemProps, LatLon } from './interfaces'
import { ACTION_ID } from './data/layer'
import { initialize, initSearch, addLocationToMap } from './data/map'
import { findNearbyPlaces } from './data/places'
import { locate } from './data/locate'

import MapView from '@arcgis/core/views/MapView'
import Graphic from '@arcgis/core/Graphic'
import Point from '@arcgis/core/geometry/Point'
import { distance } from '@arcgis/core/geometry/geometryEngine'

import { getDirections } from './data/routing'
import { bearings } from './utils/bearings'

interface AppState {
  currentLocation?: LatLon
  items: ItemProps[]
  selectedItem?: ItemProps
}

const defaultState: AppState = { items: [] }

let view: MapView

export const useAppStore = defineStore({
  id: 'app',
  state: () => (defaultState),
  actions: {
    async createMap(mapContainer: HTMLDivElement) {
      if (mapContainer) {
        view = await initialize(mapContainer, this.items)
        view?.popup.on('trigger-action', this._onActionHandler)
        addLocationToMap(this.selectedItem!)
      }
    },

    async createSearch(container: HTMLDivElement) {
      if (container) {
        initSearch(container)
      }
    },

    async fetchCurrentLocation() {
        const latlon = await locate()
        this.currentLocation = latlon
    },

    async fetchPlaces(categories: string[]) {
      if (this.currentLocation) {
        const response = await findNearbyPlaces(
          this.currentLocation,
          categories
        )
        const items = response.map((a) => ({
          name: a.attributes['PlaceName'],
          address: a.attributes['Place_addr'],
          phone: a.attributes['Phone'],
          bearing: bearings(
            this.currentLocation?.latitude as number,
            this.currentLocation?.longitude as number,
            a.location.latitude,
            a.location.longitude
          ),
          distance: distance(new Point(this.currentLocation), new Point(a.location)),
          location: a.location,
        }))
        this.items = items
      }
    },

    async _onActionHandler({ action }: __esri.PopupTriggerActionEvent) {
      if (!view) return
      if (action.id === ACTION_ID) {
        // do something
        const start = new Graphic({
          geometry: new Point(this.currentLocation)
        })
        const stop = view?.popup.selectedFeature as Graphic
        await getDirections({ start, stop, view: view as MapView })
      }
    }
  },
})
