import { BaseEslintConfig } from '@emingy/configs';

export default [
    ...BaseEslintConfig,
    {
        ignores: ['storybook-static/', '**/dist/', 'node_modules/'],
    },
];
