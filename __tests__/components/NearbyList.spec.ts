import { shallowMount } from '@vue/test-utils'
import NearbyList from '../../src/components/nearby/NearbyList.vue'

jest.mock('../../src/store')

const item1 = {
    name: 'Donut shop',
    address: '555 Main St, 90022',
    bearing: 'SE',
    distance: 22.4
}

const item2 = {
    name: 'Coffee shop',
    address: '555 Soouth St, 90022',
    bearing: 'N',
    distance: 34.4
}

describe('components/nearby/NearbyList', () => {
    it('should display list of cards', () => {
        const wrapper = shallowMount(NearbyList, {
            props: { items: [item1, item2] }
        })

        expect(wrapper.findAll('calcite-list-item').length).toEqual(2)
    })
})