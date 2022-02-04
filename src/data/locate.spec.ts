import * as locate from './locate'

const coords = {
  latitude: 34,
  longitude: -118
};

const mockGeolocation = {
    getCurrentPosition: jest.fn()
    .mockImplementation((success) => Promise.resolve(success({coords})))
};
  
(navigator as any).geolocation = mockGeolocation;

describe('data/locate', () => {
  it('should get current position', async () => {
      await locate.locate()
      expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled()
  })
})
