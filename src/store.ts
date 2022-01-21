import { defineStore } from 'pinia'
import { ItemProps } from './interfaces'

import { initialize, addLocationToMap } from './data/map'

interface AppState {
    isMap: boolean;
    items: ItemProps[];
    selectedItem?: ItemProps
}

export const useAppStore = defineStore({
    id: 'app',
    state: () => ({
        isMap: false,
        items: []
    } as AppState),

    actions: {
        async createMap(mapContainer: HTMLDivElement) {
            if (this.isMap && mapContainer) {
                await initialize(mapContainer, this.items)
                addLocationToMap(this.selectedItem!)
            }
        }
    }
})