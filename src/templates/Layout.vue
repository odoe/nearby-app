<script setup lang="ts">
import '@esri/calcite-components/dist/calcite/calcite.css'
import '@arcgis/core/assets/esri/themes/light/main.css'
import Header from '../components/common/Header.vue'
import Footer from '../components/common/Footer.vue';

</script>

<template>
<main>
    <Header />
    <section>
        <div class="main-container">
            <router-view />
        </div>
    </section>
    <Footer />
</main>
</template>

<style scoped>
.main-container {
  height: 100%;
  width: 100%;
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

section {
  flex: 1 auto;
}
</style>
