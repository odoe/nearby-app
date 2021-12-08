<script lang="ts">
import { defineCustomElements } from '@esri/calcite-components/dist/custom-elements'
import Search from '@arcgis/core/widgets/Search'

import NearbyCard from './NearbyCard.vue';
import NearbyList from './NearbyList.vue';
import { ItemProps } from '../interfaces'

import { defineComponent } from 'vue';
import { PropType } from 'vue';

defineCustomElements()

export default defineComponent({
  components: {
    NearbyCard,
    NearbyList
  },
  props: {
    items: {
      type: Array as PropType<ItemProps[]>
    }
  },
  methods: {
    loadSearch() {
      const search = new Search({
        container: this.$refs.search as HTMLElement
      })
    }
  },
  mounted() {
    this.loadSearch()
  }
})
</script>

<template>
  <div class="search-container" ref="search"></div>
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
