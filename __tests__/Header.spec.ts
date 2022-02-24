import { shallowMount } from '@vue/test-utils'
import Header from '.../../../src/components/common/Header.vue'
import { title } from '../src/config'

describe('components/common/Header', () => {
    it('should have title in config', async () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.find('h3').text()).toEqual(title)
    })

    it('should contain the search component', () => {
        const wrapper = shallowMount(Header)
        expect(wrapper.find('SearchForm')).toBeDefined()
    })
})
