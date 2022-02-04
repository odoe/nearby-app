<script setup lang="ts">
import NearbyList from '../components/nearby/NearbyList.vue';

import { useAppStore } from '../store'

const app = useAppStore()
</script>

<template>
  <NearbyList :items="app.items" />
</template>

<style scoped>
</style>
