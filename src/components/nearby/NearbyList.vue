<script setup lang="ts">
import NearbyCard from './NearbyCard.vue'
import { ItemProps } from '../../interfaces'
import { useAppStore } from '../../store'
import router from '../../router'

defineProps<{ items: ItemProps[] }>()

const app = useAppStore()

function onSelected(item: ItemProps) {
	app.selectedItem = item;
	router.push('/map')
}
</script>

<template>
	<calcite-list v-for="item in items" :key="item?.name+item?.distance">
		<calcite-list-item>
			<NearbyCard
				:name="item?.name"
				:distance="item?.distance"
				:bearing="item?.bearing"
				:address="item?.address"
				@click="onSelected(item)"/>
		</calcite-list-item>
	</calcite-list>
</template>

<style scoped>
calcite-list-item {
	margin-bottom: 0.25rem;
}
</style>
