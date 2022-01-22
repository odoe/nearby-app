<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAppStore } from '../../store'

const mapDiv = ref<HTMLDivElement>()

const app = useAppStore()

onMounted(() => {
    app.createMap(mapDiv.value!)
})

</script>

<template>
  <div ref="mapDiv" class="map-container"></div>
</template>

<style scoped>
.map-container {
    width: 100%;
    height: 100%;
}
</style>