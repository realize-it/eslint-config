module.exports = {
    plugins: [
        'eslint-plugin-unicorn',
        'eslint-plugin-jest',
        'eslint-plugin-sonarjs',
        'eslint-plugin-jsdoc',
        'eslint-plugin-unused-imports',
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'eslint-config-airbnb',
        'eslint-config-airbnb/hooks',
        'plugin:eslint-comments/recommended',
        'plugin:jest/all',
        'plugin:sonarjs/recommended',
        'plugin:jsdoc/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
        },
        'import/resolver': {
            typescript: {},
        },
    },
};
