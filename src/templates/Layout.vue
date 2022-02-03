<script setup lang="ts">
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
