export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '/\\.(gif|ttf|eot|svg|png)$/':
      '<rootDir>/src/__ tests __/__ mocks __/fileMock.ts',
    '\\.css$': '<rootDir>/src/__ tests __/__ mocks __/styleMock.ts',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/assets/.*\\.svg$',
  ],
}
