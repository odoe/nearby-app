import { defineStore } from "pinia";
import { ItemProps, LatLon } from "./interfaces";

import { initialize, initSearch, addLocationToMap } from "./data/map";
import { findNearbyPlaces } from "./data/places";
import { locate } from "./data/locate";

interface AppState {
  currentLocation?: LatLon;
  items: ItemProps[];
  selectedItem?: ItemProps;
}

export const useAppStore = defineStore({
  id: "app",
  state: () =>
    ({
      items: [],
    } as AppState),

  actions: {
    async createMap(mapContainer: HTMLDivElement) {
      if (mapContainer) {
        await initialize(mapContainer, this.items);
        addLocationToMap(this.selectedItem!);
      }
    },

    async createSearch(container: HTMLDivElement) {
      if (container) {
        initSearch(container);
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
        );
        const items = response.map((a) => ({
          name: a.attributes["PlaceName"],
          address: a.attributes["Place_addr"],
          bearing: "N",
          distance: 5,
          location: a.location,
        }));
        this.items = items;
      }
    },
  },
});
