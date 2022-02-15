import Point from '@arcgis/core/geometry/Point'
import ArcGISMap from '@arcgis/core/Map'
import Graphic from '@arcgis/core/Graphic'
import MapView from '@arcgis/core/views/MapView'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import Search from '@arcgis/core/widgets/Search'
import { getSchemes } from '@arcgis/core/smartMapping/symbology/location'

import { nearbyLayer } from './layer'
import { ItemProps } from '../interfaces'

const ZOOM = 16
const BASEMAP = 'arcgis-navigation'

export const app: any = {
	nearbyLayerView: null
}

let highlight: any

const selectedSymbol = new SimpleMarkerSymbol({
	style: "square",
	outline: { width: 1, color: [255, 255, 255, 1] },
	size: 18,
	color: [73, 210, 197, 1]
})

export async function initialize(container: HTMLDivElement, items?: ItemProps[]) {
	const map = new ArcGISMap({
		basemap: BASEMAP,
		layers: [ nearbyLayer ]
	})

	const view = new MapView({
		map,
		container,
		center: [-118, 34],
		zoom: 4
	})

	app.view = view

	await view.when()

	const { primaryScheme } = getSchemes({
		basemap: map.basemap,
		geometryType: 'point'
	})

	const sym = new SimpleMarkerSymbol(primaryScheme)

	nearbyLayer.renderer.set('symbol', sym)

	if (items?.length) {
		const graphics = items.map((x) => (new Graphic({
			geometry: new Point(x.location),
			attributes: {
				address: x.address,
				bearing: x.bearing,
				distance: x.distance,
				phone: x.phone,
				name: x.name
			},
		})))

		const controller = new AbortController()
		app.abortController = controller

		await view.goTo({ target: graphics }, { signal: controller.signal })

		await nearbyLayer.applyEdits({
			addFeatures: graphics
		})
	}

	app.nearbyLayerView = await view.whenLayerView(nearbyLayer)

	return view.when()
}

export function initSearch(container: HTMLDivElement) {
	const search = new Search({ container })
	app.search = search
}

export async function addLocationToMap(item: ItemProps) {
	if (!item?.location) return;
	const query = nearbyLayer.createQuery()
	query.where = `address = '${item.address}'`
	const oids = await nearbyLayer.queryObjectIds(query)
	highlight && highlight.remove()
	highlight = app.nearbyLayerView.highlight(oids)
	const point = new Point(item.location)
	if (app.abortController) {
		app.abortController.abort()
		delete app.abortController
	}
	app.view.goTo({ target: point, zoom: ZOOM })
}

async function onActionHandler() {}
