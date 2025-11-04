import type { StorybookConfig } from 'storybook-react-rsbuild';

const config: StorybookConfig = {
    stories: ['../packages/**/*.mdx', '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-docs', 'storybook-addon-rslib'],
    framework: {
        name: 'storybook-react-rsbuild',
        options: {},
    },
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        check: true,
    },
    staticDirs: [
        {
            from: '../public',
            to: '/static',
        },
    ],
    rsbuildFinal: (config) => {
        config.output ??= {};
        config.output.assetPrefix = process.env.PUBLIC_PATH ?? '/';
        return config;
    },
};

export default config;
