import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import SearchForm from '../../src/components/search/SearchForm.vue'

jest.mock('../../src/store')

describe('components/search/SearchForm', () => {
    it('should display search', async () => {
        const wrapper = shallowMount(SearchForm, {
            global: {
                plugins: [createTestingPinia()],
            }
        })

        expect(wrapper.find('.search-container')).toBeDefined()
    })
})
