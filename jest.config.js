export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@arcgis/core)'],
  extensionsToTreatAsEsm: ['.ts', '.vue'],
  globals: {
    '@vue/vue3-jest': {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('calcite-'),
      },
    },
  },
};
