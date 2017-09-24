module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'comma-dangle': ['error', 'ignore'],
    'no-plusplus': 'off',
    'no-undef': 'off',
    'semi': 0,
    'no-param-reassign': ["error", { "props": false }]
  }
}
