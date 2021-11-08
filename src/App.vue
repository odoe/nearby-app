<script setup lang="ts">
import '@esri/calcite-components/dist/calcite/calcite.css'
import '@arcgis/core/assets/esri/themes/light/main.css'
import Home from './components/Home.vue'
</script>

<template>
  <main>
    <section>
      <Home />
    </section>
    <footer>
      <aside>
        <nav>
          <calcite-button appearance="outline" color="blue" width="full" label="Home">
            <calcite-icon icon="home"></calcite-icon>
          </calcite-button>
          <calcite-button appearance="outline" color="blue" width="full" label="Map">
            <calcite-icon icon="layer"></calcite-icon>
          </calcite-button>
          <calcite-button appearance="outline" color="blue" width="full" label="Search">
            <calcite-icon icon="search"></calcite-icon>
          </calcite-button>
          <calcite-button appearance="outline" color="blue" width="full" label="User">
            <calcite-icon icon="user"></calcite-icon>
          </calcite-button>
        </nav>
      </aside>
    </footer>
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

nav {
  display: flex;
  width: 100%;
}

calcite-button {
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

footer {
   flex-shrink: 0;
}
</style>
