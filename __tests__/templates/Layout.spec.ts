import { shallowMount } from '@vue/test-utils'
import Layout from '../../src/templates/Layout.vue'

describe('templates/Layout', () => {
    it('should contain the router-view, footer, and header', async () => {
        const wrapper = shallowMount(Layout)
        expect(wrapper.find('router-view')).toBeDefined()
        expect(wrapper.find('Header')).toBeDefined()
        expect(wrapper.find('Footer')).toBeDefined()
    })
})
