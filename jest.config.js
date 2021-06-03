module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupDomainServices.ts'],
  moduleDirectories: ['node_modules', './'],
};
