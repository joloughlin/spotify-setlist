module.exports = {
  extends: 'react-app',
  rules: {
    'array-bracket-spacing': ['warn', 'never'],
    'block-spacing': ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'dot-notation': ['warn', { 'allowKeywords': false }],
    'keyword-spacing': 'warn',
    'jsx-quotes': ['warn','prefer-double'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'quotes': ['warn', 'single'],
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-no-bind': ['warn', { ignoreRefs: true }],
    'react/jsx-space-before-closing': 'warn',
    'react/jsx-wrap-multilines': 'warn',
    'react/no-string-refs': 'warn',
    'react/self-closing-comp': 'warn',
    'react/prop-types': 'warn',
    'semi': ['warn', 'never'],
    'space-before-blocks': 'warn'
  },
  globals: {
    __DEVELOPMENT__: false
  }
}
