<script setup lang="ts">
import { defineCustomElements } from '@esri/calcite-components/dist/custom-elements'
import Search from '@arcgis/core/widgets/Search'

import { ref, onMounted } from 'vue';

defineCustomElements()

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
</template>

<style scoped>
.search-container {
  width: 100%;
}
</style>
