import * as map from './map'
import ArcGISMap from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Search from '@arcgis/core/widgets/Search'
import * as locationSchemes from '@arcgis/core/smartMapping/symbology/location'
import Graphic from '@arcgis/core/Graphic'

jest.mock('@arcgis/core/Map')
jest.mock('@arcgis/core/views/MapView', () => {
	return jest.fn().mockImplementation(() => {
		return {
			graphics: {
				add: jest.fn()
			},
			goTo: jest.fn(),
			when: jest.fn()
		}
	})
})
jest.mock('@arcgis/core/symbols/SimpleMarkerSymbol')
jest.mock('@arcgis/core/widgets/Search')
jest.mock('@arcgis/core/Graphic')
jest.mock('@arcgis/core/geometry/Point')

let spy: any

describe('data/map', () => {
	beforeEach(() => {
		spy = jest.spyOn(locationSchemes, 'getSchemes')
			.mockImplementation(() => {
				return {
					primaryScheme: {},
					secondarySchemes: [],
					basemapId: '',
					basemapTheme: ''
				} as any
			})
	})
	afterEach(() => {
		spy.mockClear()
	})

	it('should initialize map and view', async () => {
		const container = document.createElement('div')
		await map.initialize(container)
		expect(spy).toHaveBeenCalledTimes(1)
		expect(ArcGISMap).toHaveBeenCalledTimes(1)
		expect(MapView).toHaveBeenCalledTimes(1)
	})

	it('should initialize the search', async () => {
		const container = document.createElement('div')
		map.initSearch(container)
		expect(Search).toHaveBeenCalledTimes(1)
	})

	it('should add a graphic to the map', () => {
		const item = {
			location: {
				latitude: 34,
				longitude: -118
			},
			name: 'Name',
			address: '999 Name St',
			distance: 999,
			bearing: 'NE'
		}
		map.addLocationToMap(item)
		expect(Graphic).toHaveBeenCalledTimes(1)
	})
})
