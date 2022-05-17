<script setup lang="ts">
import '@esri/calcite-components/dist/components/calcite-card'
import '@esri/calcite-components/dist/components/calcite-icon'
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
        <span slot="title" class="nearby-card__title">
            <calcite-icon icon="beaker"></calcite-icon>
            <label class="nearby-card__title-label">{{ name }}</label>
        </span>
        <span slot="subtitle">
            <span>
                {{ bearing }}
                <small>{{distance?.toFixed(2)}}m</small>
            </span>
            <br />
            <small>{{address}}</small>
        </span>
    </calcite-card>
</template>

<style scoped>
.nearby-card {
	cursor: pointer;
}

.nearby-card__title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}

.nearby-card__title-label {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>
