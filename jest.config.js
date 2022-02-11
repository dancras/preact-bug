/* eslint indent: ["error", 2] */

const jestConfig = {
  preset: 'jest-preset-preact',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./setupTestsJest.js'],
  moduleNameMapper: {
    'css$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>/src/$1',
  },
};

export default jestConfig;
