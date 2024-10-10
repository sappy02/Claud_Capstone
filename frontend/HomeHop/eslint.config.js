// ESLint configuration file for React projects
// This configuration extends the recommended settings from the React, React Hooks, and React Refresh plugins
// and adds custom rules for JSX and component exports.

import { browser } from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

/**
 * ESLint configuration
 */
export default [
  // Ignore the dist directory
  { ignores: ['dist'] },
  {
    // Files to lint (JS and JSX files)
    files: ['**/*.{js,jsx}'],
    // Language options
    languageOptions: {
      // Use the latest ECMAScript version
      ecmaVersion: 'latest',
      // Define global variables (in this case, the browser object)
      globals: { browser },
      // Parser options
      parserOptions: {
        // Enable JSX support
        ecmaFeatures: { jsx: true },
      },
    },
    // Plugins to use
    plugins: [
      react,
      reactHooks,
      reactRefresh,
    ],
    // Extend the recommended configurations from the plugins
    extends: [
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    // Custom rules
    rules: {
      // Disable the rule that warns about target="_blank" in JSX
      'react/jsx-no-target-blank': 'off',
      // Warn about components that are not exported correctly
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];