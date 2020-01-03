module.exports = {
  root: false,
  env: {
    node: false
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
	'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
	'no-mixed-spaces-and-tabs': 'off',
	'no-mixed-spaces-and-tabs': 0,
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
