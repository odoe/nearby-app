<script setup lang="ts">
import '@esri/calcite-components/dist/calcite/calcite.css'
import '@arcgis/core/assets/esri/themes/light/main.css'
import Home from './pages/Home.vue'
import Footer from './components/common/Footer.vue'
import { ItemProps } from './interfaces'
import Layout from './templates/Layout.vue'

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
  },
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
  },
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
  },
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
  },
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
  },
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
<Layout>
  <Home :items="items" />
</Layout>
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
