<template>
    <footer>
      <aside>
        <nav>
          <calcite-button @click="goTo('/')" appearance="outline" color="blue" width="full" label="Home">
            <calcite-icon icon="home"></calcite-icon>
          </calcite-button>
          <calcite-button @click="goTo('/map')" appearance="outline" color="blue" width="full" label="Map">
            <calcite-icon icon="layer"></calcite-icon>
          </calcite-button>
          <calcite-button @click="goTo('/user')" appearance="outline" color="blue" width="full" label="User">
            <calcite-icon icon="user"></calcite-icon>
          </calcite-button>
        </nav>
      </aside>
    </footer>
</template>

<script setup lang="ts">
import router from '../../router';

const goTo = (route: string) => {
  router.push(route)
}

</script>

<style>
nav {
  display: flex;
  width: 100%;
}

calcite-button {
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}

footer {
   position: sticky;
   bottom: 0;
}
</style>
