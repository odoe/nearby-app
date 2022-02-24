import * as places from '../src/data/places'
import * as locator from '@arcgis/core/rest/locator'

const coords = {
  latitude: 34,
  longitude: -118
};

let spy: any

describe('data/places', () => {
	beforeEach(() => {
		spy = jest.spyOn(locator, 'addressToLocations').mockImplementation(
			async () => ([])
		)
	})

	afterEach(() => {
		spy.mockClear()
	})

	it('should find nearby places', async () => {
		await places.findNearbyPlaces(coords, ['Coffee'])
		expect(spy).toHaveBeenCalled()
	})
})
