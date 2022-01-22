<script setup lang="ts">
export interface ItemProps {
    name: string;
    address: string;
    bearing: string;
    distance: number;
}

withDefaults(defineProps<ItemProps>(), {
    name: '',
    address: '',
    bearing: '',
    distance: 0
})
</script>

<template>
    <calcite-card class="nearby-card">
        <span slot="title"><calcite-icon icon="beaker"></calcite-icon>{{ name }}</span>
        <span slot="subtitle">
            {{ bearing }}
            <small>{{distance?.toFixed(2)}}m</small>
            <small>{{address}}</small>
        </span>
    </calcite-card>
</template>

<style scoped>
.nearby-card {
	cursor: pointer;
}
</style>
