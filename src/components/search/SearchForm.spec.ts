import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import SearchForm from './SearchForm.vue'

jest.mock('../../store')

describe('SearchForm', () => {
    it('should display search', async () => {
        const wrapper = shallowMount(SearchForm, {
            global: {
                plugins: [createTestingPinia()],
            }
        })

        expect(wrapper.find('.search-container')).toBeDefined()
    })
})
