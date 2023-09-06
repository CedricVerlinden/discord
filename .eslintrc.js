module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "next/core-web-vitals",
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'import-helpers'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['type', 'module'],
          // --
          ['/^@next/', '/^next/'],
          // --
          ['/^@react/', '/^react/'],
          // --
          ['/^@clerk/', '/^@uploadthing/', '/^uploadthing/', '/^@prisma/'],
          // --
          ['/^@/', '/^@app/'],
          // --
          ['/^@lib/'],
          // --
          ['/^@hooks/'],
          // --
          ['/^@components/'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
