import type { KnipConfig } from 'knip';

const config: KnipConfig = {
    ignoreWorkspaces: ['.'],

    workspaces: {
        // 2. Пакет @emingy/configs
        'packages/configs': {
            project: ['./src/**/*.ts'],
            ignoreBinaries: ['tsc'],
        },

        // 3. Пакет @emingy/core
        'packages/core': {
            project: ['./src/**/*.{ts,tsx,scss,sass,css}'],
            ignore: ['**/__tests__/**', '**/*.stories.tsx', '**/*.mdx'],
            ignoreDependencies: ['@emingy/configs'],
        },
    },
};

export default config;
