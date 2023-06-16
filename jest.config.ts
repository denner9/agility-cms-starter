import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['./lib/jest.setup.ts'],
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  passWithNoTests: true,
  moduleDirectories: ["node_modules", '<rootDir>/'],
  preset: "ts-jest",
  unmockedModulePathPatterns: ["./node_modules/react/", "node_modules/lodash/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  automock: false
}

export default createJestConfig(config);
