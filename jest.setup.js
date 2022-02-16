// mocked methods
export const mock_goTo = jest.fn()
export const mock_highlight = jest.fn()
export const mock_whenLayerView = jest.fn().mockImplementation(() => {
	return {
		highlight: mock_highlight
	}
})
export const mock_graphics_add = jest.fn()

// global mocks
global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}))

// mocks
jest.mock('@arcgis/core/Map')
jest.mock('@arcgis/core/symbols/SimpleMarkerSymbol')
jest.mock('@arcgis/core/widgets/Search')
jest.mock('@arcgis/core/Graphic')
jest.mock('@arcgis/core/geometry/Point')
jest.mock('@arcgis/core/geometry/geometryEngine', () => {
	return {
		distance: jest.fn()
	}
})
jest.mock('@arcgis/core/views/MapView', () => {
	return jest.fn().mockImplementation(() => {
		return {
			graphics: {
				add: mock_graphics_add
			},
			goTo: mock_goTo,
			when: jest.fn(),
			on: jest.fn(),
			whenLayerView: mock_whenLayerView
		}
	})
})
