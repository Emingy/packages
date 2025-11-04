import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rslib/core';

export default defineConfig({
    lib: [
        {
            bundle: false,
            format: 'cjs',
            dts: true,
        },
    ],
    output: {
        target: 'web',
    },
    source: {
        entry: {
            index: [
                './src/**',
                '!src/**/*.{stories,spec}.*',
                '!src/**/*.{mdx,snap}',
                '!src/**/story',
                '!src/styles/**',
            ],
        },
    },
    plugins: [pluginReact(), pluginSass()],
    resolve: {
        alias: {
            '@emingy/core': './src/*',
        },
    },
    tools: {
        rspack: (config, { mergeConfig }) => {
            return mergeConfig(config, {
                output: {
                    chunkFilename: '[name].[ext]',
                },
            });
        },
    },
});
