import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from './store'

describe('store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('state: items should be empty', async () => {
    const app = useAppStore()
    expect(app.items.length).toBe(0)
  })
})
