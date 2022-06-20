export default {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  globals: {
    'ts-jest': {
      extends: './babel.config.json'
    }
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  modulePathIgnorePatterns: ['dist'],
  moduleNameMapper: {
    '@react-mailkit/(.+)$': '<rootDir>packages/$1/src'
  },
  notify: true,
  notifyMode: 'always',
  roots: ['<rootDir>packages'],
  testMatch: ['**/__tests__/*.+(ts|tsx|js)', '**/*.test.+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  setupFilesAfterEnv: ['<rootDir>jest/setup-jest.ts']
};
