<template>
    <header class="header">
        <h3>{{ title }}</h3>
        <SearchForm />
    </header>
</template>

<script setup lang="ts">
import SearchForm from '../search/SearchForm.vue'
import { title } from '../../config'
</script>

<style>
.header {
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: var(--calcite-ui-brand);
    color: var(--calcite-ui-foreground-1);
    padding: 0.5rem;
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: space-between;
}
</style>
