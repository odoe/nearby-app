import Point from '@arcgis/core/geometry/Point'
import ArcGISMap from '@arcgis/core/Map'
import Graphic from '@arcgis/core/Graphic'
import MapView from '@arcgis/core/views/MapView'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import Search from '@arcgis/core/widgets/Search'
import { getSchemes } from '@arcgis/core/smartMapping/symbology/location'

import { nearbyLayer } from './layer'

import { ItemProps } from '../interfaces'

export const app: any = {}

const selectedSymbol = new SimpleMarkerSymbol({
	style: "square",
	outline: { width: 1, color: [255, 255, 255, 1] },
	size: 18,
	color: [73, 210, 197, 1]
})

export async function initialize(container: HTMLDivElement, items?: ItemProps[]) {
	const map = new ArcGISMap({
		basemap: 'arcgis-navigation',
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
			attributes: {...x},
		})))

		await nearbyLayer.applyEdits({
			addFeatures: graphics
		})

		const controller = new AbortController()
		app.abortController = controller
		view.goTo({ target: graphics }, { signal: controller.signal })
	}

	return view.when()
}

export function initSearch(container: HTMLDivElement) {
	const search = new Search({ container })
	app.search = search
}

export function addLocationToMap(item: ItemProps) {
	if (!item?.location) return;
	const point = new Point(item.location)
	console.log(item)
	const graphic = new Graphic({
		geometry: point,
		attributes: { ...item },
		symbol: selectedSymbol,
		popupTemplate: {
			title: '{name}',
			content: '{*}'
		}
	})
	app.view.graphics.add(graphic)
	if (app.abortController) {
		app.abortController.abort()
		delete app.abortController
	}
	app.view.goTo({target: graphic, zoom: 16})
}
