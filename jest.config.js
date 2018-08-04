module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testRegex: './src/.*.test.ts$',
  rootDir: '.',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      skipBabel: true
    }
  }
}
