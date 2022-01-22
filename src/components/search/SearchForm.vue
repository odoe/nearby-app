<script setup lang="ts">
import { defineCustomElements } from '@esri/calcite-components/dist/custom-elements'
import { useAppStore } from '../../store'

import { ref, onMounted } from 'vue';

defineCustomElements()

const searchRef = ref(null)

const app = useAppStore()

function loadSearch() {
  if (searchRef.value) {
      app.createSearch(searchRef.value)
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
