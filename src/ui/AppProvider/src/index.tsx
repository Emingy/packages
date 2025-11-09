import type { PropsWithChildren } from 'react';

import './index.module.scss';

export const AppProvider = ({ children }: PropsWithChildren) => {
    return children;
};
