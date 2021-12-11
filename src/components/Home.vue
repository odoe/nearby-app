<script setup lang="ts">
import { defineCustomElements } from '@esri/calcite-components/dist/custom-elements'
import Search from '@arcgis/core/widgets/Search'

import NearbyList from './NearbyList.vue';
import { ItemProps } from '../interfaces'

import { ref, onMounted } from 'vue';

defineCustomElements()

defineProps<{ items: ItemProps[] }>()

const searchRef = ref(null)

function loadSearch() {
  if (searchRef.value) {
      const search = new Search({
        container: searchRef.value as HTMLElement
      })
  }
}

onMounted(() => {
  loadSearch()
})
</script>

<template>
  <div class="search-container" ref="searchRef"></div>
  <div class="card-container">
    <NearbyList :items="items" />
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
