import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rslib/core';

export default defineConfig({
    lib: [
        {
            bundle: false,
            dts: true,
            format: 'esm',
        },
    ],
    source: {
        entry: {
            index: ['./packages/**', '!**/dist', '!**/node_modules'],
        },
    },
    output: {
        target: 'web',
    },
    plugins: [pluginReact(), pluginSass()],
    resolve: {
        alias: {
            '@storybook-components': './storybook/components/*',
            '@storybook-utils': './storybook/utils/*',
        },
    },
});
