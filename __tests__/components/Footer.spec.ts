import { shallowMount } from '@vue/test-utils'
import Footer from '../../src/components/common/Footer.vue'
import router from '../../src/router'

const spy = jest.spyOn(router, 'push')

describe('components/common/Footer', () => {
    afterAll(() => {
        spy.mockClear()
    })

    it('should contain buttons', async () => {
        const wrapper = shallowMount(Footer)
        expect(wrapper.findAll('calcite-button')).toHaveLength(2)
    })

    it('should go to new route on button click', () => {
        const wrapper = shallowMount(Footer)
        wrapper.findAll('calcite-button')[0].trigger('click')
        expect(spy).toHaveBeenCalled();
    })
})
