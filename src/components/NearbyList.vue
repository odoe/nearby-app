<script lang="ts">
import NearbyCard from './NearbyCard.vue'
import { ItemProps } from '../interfaces'

import { defineComponent } from 'vue'
import { PropType } from 'vue';

export default defineComponent({
  components: {
    NearbyCard
  },
  props: {
    items: {
      type: Array as PropType<ItemProps[]>
    }
  }
})
</script>

<template>
    <calcite-list v-for="{ name, address, distance, bearing } in items" :key="name">
        <calcite-list-item>
            <NearbyCard :name="name" :distance="distance" :bearing="bearing" :address="address" />
        </calcite-list-item>
    </calcite-list>
</template>

<style scoped>
calcite-list-item {
  margin-bottom: 0.25rem;
}
</style>
