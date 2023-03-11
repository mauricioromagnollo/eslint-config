module.exports = {
  react: {
    version: 'detect',
  },
  'import/parsers': {
    [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
  },
}
