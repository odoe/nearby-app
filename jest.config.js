export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.*\\.(tsx?|js)$': 'ts-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!(@arcgis|@esri|@stencil|@popperjs)/)'],
  moduleFileExtensions: ['json', 'js', 'jsx', 'ts', 'tsx', 'vue'],
  extensionsToTreatAsEsm: ['.ts', '.vue'],
  setupFiles: ['./jest.setup.js'],
  globals: {
    '@vue/vue3-jest': {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('calcite-'),
      },
    },
  },
};