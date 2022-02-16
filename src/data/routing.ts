import Graphic from '@arcgis/core/Graphic';
import MapView from '@arcgis/core/views/MapView'
import Stop from '@arcgis/core/rest/support/Stop'
import DirectionsViewModel from '@arcgis/core/widgets/Directions/DirectionsViewModel';

interface GetDirectionsParams {
    start: Graphic,
    stop: Graphic,
    view: MapView
}

const directionsVM = new DirectionsViewModel()

export async function getDirections({ start, stop, view }: GetDirectionsParams) {
    const _start = new Stop({
        geometry: start.geometry
    })
    const _stop = new Stop({
        geometry: stop.geometry
    })
    directionsVM.view = view
    await directionsVM.load()
    directionsVM.stops.removeAll()
    directionsVM.stops.addMany([_start, _stop])
    const walkingTravelMode = directionsVM.travelModes.find(mode => mode.name === 'Walking Time')
    if (walkingTravelMode) {
        directionsVM.selectedTravelMode = walkingTravelMode
    }

    const routeResult = await directionsVM.getDirections()
    return routeResult
}

export function clearDirections() {
    directionsVM.reset()
}