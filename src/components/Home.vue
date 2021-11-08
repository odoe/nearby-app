<script setup lang="ts">
defineProps()
</script>

<script lang="ts">
import { defineCustomElements } from '@esri/calcite-components/dist/custom-elements'
import Search from '@arcgis/core/widgets/Search'

import NearbyCard, { ItemProps } from './NearbyCard.vue';


defineCustomElements()

const items: ItemProps[] = [
  {
    name: 'Donut shop',
    address: '555 Main St, 90022',
    bearing: 'SE',
    distance: 22.4
  },
  {
    name: 'Coffee shop',
    address: '555 1st St, 91702',
    bearing: 'N',
    distance: 5.2
  }
];

export default {
  components: {
    NearbyCard
  },
  methods: {
    loadSearch() {
      const search = new Search({
        container: (this as any).$refs.search as HTMLElement
      })
    }
  },
  mounted() {
    (this as any).loadSearch()
  }
}
</script>

<template>
  <div class="search-container" ref="search"></div>
  <div class="card-container">
    <calcite-list v-for="{ name, address, distance, bearing } in items" :key="name">
      <calcite-list-item>
        <NearbyCard :name="name" :distance="distance" :bearing="bearing" :address="address" />
      </calcite-list-item>
    </calcite-list>
  </div>
</template>

<style scoped>
.card-container {
  width: 100%;
}

.search-container {
  width: 100%;
}

calcite-list-item {
  margin-bottom: 0.25rem;
}
</style>
