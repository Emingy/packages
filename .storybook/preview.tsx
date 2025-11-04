import React from 'react';
import type { Preview } from 'storybook-react-rsbuild';

import { AppProvider, PageWrapper } from '@emingy/core/ui';

import './preview.scss';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <AppProvider>
                <PageWrapper>
                    <Story />
                </PageWrapper>
            </AppProvider>
        ),
    ],
};

export default preview;
