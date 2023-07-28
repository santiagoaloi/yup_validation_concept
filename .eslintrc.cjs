/* eslint-env node */
// Specify that the linting environment is Node.js.

require('@rushstack/eslint-patch/modern-module-resolution')
// Apply the modern module resolution patch for ESLint.

module.exports = {
  root: true,
  // Set the root of the configuration.

  extends: [
    'plugin:vue/vue3-strongly-recommended',
    // Extend the recommended Vue 3 ruleset.

    'eslint:strongly-recommended',
    // Extend the recommended ESLint rules.

    '@vue/eslint-config-prettier/skip-formatting',
    // Skip ESLint formatting rules that conflict with Prettier.

    './.eslintrc-auto-import.json'
    // Extend rules for auto-imports from the specified configuration file.

    // 'plugin:tailwindcss/recommended'
    // Uncomment the line above if you want to extend the recommended Tailwind CSS rules.
  ],

  parserOptions: {
    ecmaVersion: 'latest'
    // Specify the ECMAScript version to parse.
  },

  rules: {
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always' | 'never' | 'consistent' | 'ignore',
        multiline: 'always' | 'never' | 'consistent' | 'ignore',
        maxEmptyLines: 0,
        blocks: {
          template: {
            singleline: 'always' | 'never' | 'consistent' | 'ignore',
            multiline: 'always' | 'never' | 'consistent' | 'ignore',
            maxEmptyLines: 0
          },
          script: {
            singleline: 'always' | 'never' | 'consistent' | 'ignore',
            multiline: 'always' | 'never' | 'consistent' | 'ignore',
            maxEmptyLines: 0
          },
          'my-block': {
            singleline: 'always' | 'never' | 'consistent' | 'ignore',
            multiline: 'always' | 'never' | 'consistent' | 'ignore',
            maxEmptyLines: 0
          }
        }
      }
    ],

    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea']
      }
    ],

    'vue/html-indent': [
      'error',
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],

    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],

    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea'],
        allowEmptyLines: false
      }
    ],

    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],

    // <some-component /> becomes <SomeComponent />
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    // Enforce PascalCase for component names in templates.

    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'ATTR_DYNAMIC',
          'OTHER_DIRECTIVES',
          ['ATTR_STATIC', 'ATTR_SHORTHAND_BOOL'],
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: true
      }
    ],
    // Enforce a specific order for Vue component attributes.

    'vue/multi-word-component-names': 'off',
    // Allow multi-word component names.

    'no-irregular-whitespace': 'off'
    // Allow irregular whitespace characters.
  }
}
