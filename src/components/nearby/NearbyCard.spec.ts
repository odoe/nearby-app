import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import NearbyCard from './NearbyCard.vue'
import { useAppStore } from '../../store'

jest.mock('../../store')

describe('NearbyCard', () => {
    it('should display name', async () => {
        const item = {
            name: 'Donut shop',
            address: '555 Main St, 90022',
            bearing: 'SE',
            distance: 22.4
        }

        const wrapper = mount(NearbyCard, {
            props: item,
            global: {
                plugins: [createTestingPinia()],
            }
        })

        expect(wrapper.find('span[slot=title]').text()).toEqual(item.name)

        // const app = useAppStore()

        // wrapper.findAll('calcite-card')[0].trigger('click')
        // wrapper.trigger('click')

        // expect(app.selectedItem).toBe(item)
    })
})