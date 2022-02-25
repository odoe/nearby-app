const mock_getDirections = jest.fn().mockReturnValue({})
const mock_load = jest.fn()
const mock_removeAll = jest.fn()
const mock_addMany = jest.fn()
const mock_reset = jest.fn()
const mock_travelMode = {
    name: 'Walking Time'
}

import Graphic from '@arcgis/core/Graphic'
import MapView from '@arcgis/core/views/MapView'
import DirectionsViewModel from '@arcgis/core/widgets/Directions/DirectionsViewModel'
import * as routing from '../../src/data/routing'

jest.mock('@arcgis/core/widgets/Directions/DirectionsViewModel', () => {
    return jest.fn().mockImplementation(() => {
        return {
            getDirections: mock_getDirections,
            load: mock_load,
            stops: {
                removeAll: mock_removeAll,
                addMany: mock_addMany
            },
            selectedTravelMode: null,
            travelModes: {
                find: jest.fn().mockReturnValue(mock_travelMode)
            },
            reset: mock_reset
        }
    })
})


describe('data/routing', () => {
    it('should get directions between two locations', async () => {
        const start = new Graphic()
        const stop = new Graphic()
        const view = new MapView()
        await routing.getDirections({ start, stop, view })
        expect(DirectionsViewModel).toHaveBeenCalledTimes(1)
        expect(mock_load).toHaveBeenCalledTimes(1)
        expect(mock_removeAll).toHaveBeenCalledTimes(1)
        expect(mock_addMany).toHaveBeenCalledTimes(1)
        expect(mock_getDirections).toHaveBeenCalledTimes(1)
    })

    it('should reset the directions view model', () => {
        routing.clearDirections()
        expect(mock_reset).toHaveBeenCalledTimes(1)
    })
})