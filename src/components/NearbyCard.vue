<!-- <script setup lang="ts">
export interface ItemProps {
    name: string;
    address: string;
    bearing: string;
    distance: number;
}

defineProps<ItemProps>();
</script> -->

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        name: String,
        address: String,
        bearing: String,
        distance: Number
    },
    mounted() {
        console.log('mounted', this.$props)
    }
});
</script>

<template>
    <calcite-card>
        <span slot="title"><calcite-icon icon="beaker"></calcite-icon>{{ name }}</span>
        <span slot="subtitle">
            {{ bearing }}
            <small>{{distance?.toFixed(2)}}m</small>
            <small>{{address}}</small>
        </span>
    </calcite-card>
</template>

<style scoped>
</style>
