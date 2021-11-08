<script setup lang="ts">
export interface ItemProps {
    name: string;
    address: string;
    bearing: string;
    distance: number;
}

defineProps<ItemProps>();
</script>

<script lang="ts">
export default {};
</script>

<template>
    <calcite-card>
        <span slot="title"><calcite-icon icon="beaker"></calcite-icon>{{ name }}</span>
        <span slot="subtitle">
            {{ bearing }}
            <small>{{distance.toFixed(2)}}m</small>
            <small>{{address}}</small>
        </span>
        <calcite-button slot="footer-leading" color="light" scale="s" icon-start="plus"></calcite-button>
        <div slot="footer-trailing">
            <calcite-button color="light" id="card-icon-test-2" icon-start="layer"></calcite-button>
            <calcite-button color="light" id="card-icon-test-1" icon-start="attachment"></calcite-button>
        </div>
    </calcite-card>
</template>

<style scoped>
</style>
