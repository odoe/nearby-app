global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))

jest.mock('@arcgis/core/Map')
jest.mock('@arcgis/core/symbols/SimpleMarkerSymbol')
jest.mock('@arcgis/core/widgets/Search')
jest.mock('@arcgis/core/Graphic')
jest.mock('@arcgis/core/geometry/Point')
jest.mock('@arcgis/core/views/MapView', () => {
	return jest.fn().mockImplementation(() => {
		return {
			graphics: {
				add: jest.fn()
			},
			goTo: jest.fn(),
			when: jest.fn(),
			on: jest.fn(),
			whenLayerView: jest.fn().mockImplementation(() => {
				return {
					highlight: jest.fn()
				}
			})
		}
	})
})
