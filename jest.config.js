module.exports = {
  preset: 'ts-jest',
  rootDir: 'src',
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  testEnvironment: 'node'
}
