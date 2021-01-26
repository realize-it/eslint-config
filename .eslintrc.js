/* eslint-disable sonarjs/no-duplicate-string -- файл конфигурационный */

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
    rules: {
        'react/jsx-filename-extension': ['error', {
            extensions: ['.jsx', '.tsx'],
        }],
        'import/extensions': ['error', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
            mjs: 'never',
            json: 'always',
        }],
        'no-unused-vars': 'off', // заменено на unused-imports/no-unused-vars-ts
        '@typescript-eslint/no-unused-vars': 'off', // заменено на unused-imports/no-unused-vars-ts
        'unused-imports/no-unused-vars-ts': ['error', {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
            argsIgnorePattern: '^_',
        }],
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        'no-use-before-define': 'off', // заменено на @typescript-eslint/no-use-before-define
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/no-empty-function': 'warn',
        curly: ['error', 'all'],
        'no-console': 'warn',
        'no-alert': 'error',
        indent: ['error', 4, { // из airbnb с изменённым числом пробелов
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            // MemberExpression: null,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
            CallExpression: {
                arguments: 1,
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false,
        }],
        'max-len': [ // из airbnb с изменненым числом символов
            'error',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-unused-expressions': 'off', // заменено на @typescript-eslint/no-unused-expressions
        '@typescript-eslint/no-unused-expressions': ['error',
            {
                allowShortCircuit: false,
                allowTernary: false,
                allowTaggedTemplates: false,
            },
        ],
        'no-shadow': 'off', // заменено на @typescript-eslint/no-shadow
        '@typescript-eslint/no-shadow': 'error',
        'no-restricted-syntax': [
            'error',
            // из airbnb
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'ForOfStatement',
                message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
            // собственные
            {
                selector: 'TSEnumDeclaration',
                message: 'Вместо enum стоит использовать union',
            },
        ],
        'max-lines': [
            'warn',
            {
                max: 320,
                skipBlankLines: true,
                skipComments: true,
            },
        ],
        'no-nested-ternary': 'off', // заменено на unicorn-реализацию
        'unicorn/no-nested-ternary': 'error',
        'react/destructuring-assignment': 'off', // в ts рушит вывод типов после тайпгарда
        'react/prop-types': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-props-no-spreading': 'off',
        'react/no-unused-prop-types': 'off', // не нужно, TS
        'react/require-default-props': 'off',
        'react/sort-comp': 'off',
        'react/forbid-prop-types': 'off', // с ts не нужен
        'react/static-property-placement': ['error', 'static public field'],
        'react/jsx-uses-react': 'off', // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
        'react/react-in-jsx-scope': 'off', // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/catch-error-name': ['error', { name: 'exception' }],
        '@typescript-eslint/explicit-function-return-type': ['error', {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
        }],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-inferrable-types': ['error', {
            ignoreParameters: true,
            ignoreProperties: true,
        }],
        '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/ban-ts-comment': ['error', {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': 'allow-with-description',
            'ts-nocheck': 'allow-with-description',
            'ts-check': false,
            minimumDescriptionLength: 10,
        }],
        'unused-imports/no-unused-imports-ts': 'error',
        'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
        'eslint-comments/require-description': ['warn', { ignore: ['eslint-enable'] }],
        'jsdoc/require-jsdoc': [
            'warn',
            {
                contexts: [
                    'TSDeclareFunction:not(TSDeclareFunction + TSDeclareFunction)',
                    'FunctionDeclaration:not(TSDeclareFunction + FunctionDeclaration)',
                ],
                require: {
                    FunctionDeclaration: false,
                },
            },
        ],
    },
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
