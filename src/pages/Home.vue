<script setup lang="ts">
import NearbyList from '../components/nearby/NearbyList.vue';
import { ItemProps } from '../interfaces'

defineProps<{ items: ItemProps[] }>()
</script>

<template>
  <NearbyList :items="items" />
</template>

<style scoped>
calcite-list-item {
  margin-bottom: 0.25rem;
}
</style>
