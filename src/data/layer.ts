import Graphic from '@arcgis/core/Graphic';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import Field from '@arcgis/core/layers/support/Field'
import PopupTemplate from '@arcgis/core/PopupTemplate'
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'

// Fields
const fields = [
	{
		name: 'OBJECTID',
		alias: 'OBJECTID',
		type: 'oid',
	},
	{
		name: 'address',
		alias: 'Address',
		type: 'string',
	},
	{
		name: 'bearing',
		alias: 'Bearing',
		type: 'string',
	},
	{
		name: 'distance',
		alias: 'Distance',
		type: 'double',
	},
	{
		name: 'name',
		alias: 'Name',
		type: 'string',
	},
	{
		name: 'phone',
		alias: 'Phone',
		type: 'string',
	},
	{
		name: 'url',
		alias: 'Url',
		type: 'string',
	},
	{
		name: 'type',
		alias: 'Type',
		type: 'string',
	},
].map((field) => new Field(field as any))

const popupTemplate = new PopupTemplate({
	title: '{name}',
	content: ({ graphic }: { graphic: Graphic }) => {
		const { address, phone } = graphic.attributes
		const list = document.createElement('calcite-value-list')
		list.innerHTML = `
			<calcite-value-list-item label="${address}" description="
			${phone}
			">
		`
		return list
	},
	actions: [
		{
			title: 'Directions',
			id: 'directions',
			className: 'esri-icon-directions'
		} as any
	],
})

const renderer = new SimpleRenderer({
	symbol: new SimpleMarkerSymbol({
		outline: { width: 1, color: [255, 255, 255, 1] },
		size: 10,
		color: [32, 187, 47, 1]
	})
})

export const nearbyLayer = new FeatureLayer({
	id: 'nearby-places',
	title: 'Nearby Places',
	geometryType: 'point',
	source: [],
	fields,
	objectIdField: 'OBJECTID',
	outFields: ['*'],
	renderer,
	popupTemplate
})
