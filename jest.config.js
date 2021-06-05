module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['./'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  cache: true,
  moduleDirectories: ['node_modules', './'],
};
