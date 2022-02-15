import Graphic from "@arcgis/core/Graphic";
import MapView from "@arcgis/core/views/MapView";
import DirectionsViewModel from "@arcgis/core/widgets/Directions/DirectionsViewModel";

interface GetDirectionsParams {
    start: Graphic,
    stop: Graphic,
    view: MapView
}

const directionsVM = new DirectionsViewModel()

export async function getDirections({ start, stop, view }: GetDirectionsParams) {
    directionsVM.view = view
    await directionsVM.load()
    directionsVM.stops.removeAll()
    directionsVM.stops.addMany([start, stop] as any[])
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