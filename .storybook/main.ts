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
    staticDirs: ['../public'],
};

export default config;
