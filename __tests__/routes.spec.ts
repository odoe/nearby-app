import routes from '../src/router/routes'

describe('router/routes', () => {
    it('should contain all routes for application', async () => {
      expect(routes.length).toBe(1)
    })

    it('should contain the home route', () => {
        const route = routes[0];
        expect(route.path).toEqual('/')
    })

    it('should contain child routes for Home and Map', () => {
        const route = routes[0]
        expect(route.children?.length).toBe(2)
        
        expect(route.children![0].name).toEqual('Home')
        expect(route.children![0].path).toEqual('')
        expect(route.children![1].name).toEqual('Map')
        expect(route.children![1].path).toEqual('/map')
    })
})
