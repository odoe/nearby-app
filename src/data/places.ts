import Point from '@arcgis/core/geometry/Point'
import { addressToLocations } from '@arcgis/core/rest/locator'
import { geocodeURL, maxLocations } from '../config';
import { LatLon } from '../interfaces';

/**
 * Use the Locator to search for nearby places
 * with a given lat lon and categories
 */
 export const findNearbyPlaces = async (latLon: LatLon, categories: string[]) => {
	const { latitude, longitude } = latLon;
	if (Math.abs(latitude) < 1 && Math.abs(longitude) < 1) return [];
	const point = new Point({ longitude, latitude });

	const results = await addressToLocations(geocodeURL, {
		address: undefined,
		location: point,
		categories,
		maxLocations,
		outFields: ['Place_addr', 'PlaceName', 'Phone', 'URL', 'Type'],
	});

	return (
		results
			.map((result) => {
				return {
					...result.toJSON(),
					location: {
						latitude: result.location.latitude,
						longitude: result.location.longitude,
					},
				};
			})
	);
};