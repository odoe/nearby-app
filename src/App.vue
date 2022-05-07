<script setup lang="ts">
import config from '@arcgis/core/config'
import { onMounted } from 'vue'

import { useAppStore } from './store'

config.apiKey = import.meta.env.VITE_API_KEY as string

const app = useAppStore()

onMounted(async () => {
  await app.fetchCurrentLocation()
  await app.fetchPlaces(['Coffee Shop'])
})
</script>

<template>
  <router-view></router-view>
</template>

<style>
html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
}
</style>
