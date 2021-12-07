<script setup lang="ts">
import '@esri/calcite-components/dist/calcite/calcite.css'
import '@arcgis/core/assets/esri/themes/light/main.css'
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import { ItemProps } from './components/NearbyCard.vue'

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
</script>

<template>
  <main>
    <section>
      <Home :items="items" />
    </section>
    <Footer />
  </main>
</template>

<style>
html, body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

section {
  flex: 1 auto;
}

#app {
  height: 100%;
}
</style>
