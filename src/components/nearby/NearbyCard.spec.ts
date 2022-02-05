import { mount } from '@vue/test-utils'
import NearbyCard from './NearbyCard.vue'

describe('components/nearby/NearbyCard', () => {
    it('should display name', async () => {
        const item = {
            name: 'Donut shop',
            address: '555 Main St, 90022',
            bearing: 'SE',
            distance: 22.4
        }
        const wrapper = mount(NearbyCard, {
            props: item
        })

        expect(wrapper.find('span[slot=title]').text()).toEqual(item.name)
    })
})
