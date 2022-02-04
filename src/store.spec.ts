import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from './store'

import * as locate from './data/locate'
import * as map from './data/map'
import * as places from './data/places'

const coords = {
  latitude: 34,
  longitude: -118
};

let spyInit: any
let spyAddLocation: any
let spyInitSearch: any
let spyLocate: any
let spyFind: any

describe('store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    spyInit = jest.spyOn(map, 'initialize')
        .mockImplementation(async () => Promise.resolve())

    spyAddLocation = jest.spyOn(map, 'addLocationToMap')
              .mockImplementation(async () => Promise.resolve())

    spyInitSearch = jest.spyOn(map, 'initSearch')
              .mockImplementation(() => {})

    spyLocate = jest.spyOn(locate, 'locate')
        .mockImplementation(async () => Promise.resolve(coords))

    spyFind = jest.spyOn(places, 'findNearbyPlaces')
        .mockImplementation(async () => Promise.resolve([{
          attributes: {
            PlaceName: 'Owl City',
            Place_addr: '999 Ez St'
          },
          location: {
            latitude: coords.latitude,
            longitude: coords.longitude
          }
        }]))
  })

  afterEach(() => {
    spyLocate.mockClear()
    spyInit.mockClear()
    spyAddLocation.mockClear()
    spyInitSearch.mockClear()
  })

  it('should int with empty items', async () => {
    const app = useAppStore()
    expect(app.items.length).toBe(0)
  })

  it('should fetch current location', async () => {
    const app = useAppStore()
    await app.fetchCurrentLocation()
    expect(spyLocate).toHaveBeenCalled()
  })

  it('should initialize the map', async () => {
    const app = useAppStore()
    const container = document.createElement('div')
    await app.createMap(container)
    expect(spyInit).toHaveBeenCalledWith(container, app.items)
    expect(spyAddLocation).toHaveBeenCalledWith(app.selectedItem)
  })

  it('should initialize the search widget', async () => {
    const app = useAppStore()
    const container = document.createElement('div')
    await app.createSearch(container)
    expect(spyInitSearch).toHaveBeenCalledWith(container)
  })

  it('should fetch nearby places', async () => {
    const app = useAppStore()
    const categories = ['Coffee']
    app.currentLocation = coords
    await app.fetchPlaces(categories)
    expect(spyFind).toHaveBeenCalledWith(app.currentLocation, categories)
    expect(app.items.length).toBe(1)
  })
})
