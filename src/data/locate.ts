import { LatLon } from '../interfaces'

export async function locate() {
    return new Promise<LatLon>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            resolve(coords);
        }, reject);
    });
}