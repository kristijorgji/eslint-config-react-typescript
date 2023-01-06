module.exports = {
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': [
            'error',
            {
                semi: true,
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 120,
                tabWidth: 4,
                useTabs: false,
                bracketSpacing: true,
                arrowParens: 'avoid',
                endOfLine: "lf"
            },
        ],
        'import/no-anonymous-default-export': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '@/**',
                        group: 'external',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: ['react'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreDeclarationSort: true,
            },
        ],
    },
};
