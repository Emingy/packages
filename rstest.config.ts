import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rstest/core';

export default defineConfig({
    plugins: [
        pluginReact({
            swcReactOptions: {
                runtime: 'classic',
            },
        }),
        pluginSass(),
    ],
    testEnvironment: 'jsdom',
    globals: true,
    setupFiles: ['./rstest.setup.ts'],
});
