import { nearbyLayer } from '../src/data/layer'

describe('data/layer', () => {
	it('should be a defaults defined', () => {
		expect(nearbyLayer.geometryType).toEqual('point')
		expect(nearbyLayer.popupTemplate).toBeDefined()
	})
})
