module.exports = {
  extends: ['@lennardvdberg/eslint-config-react-lennard', 'plugin:@next/next/recommended'],
  rules: {
    // turn off href checks on <a/> elements, because of Next.js Link component
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'react/function-component-definition': ['error', {namedComponents: 'arrow-function'}],
  },
}
