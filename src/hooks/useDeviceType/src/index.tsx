import { useEffect, useState } from 'react';

import { EDeviceType, SCREEN_SIZE_BREAKPOINT_CHECKERS } from './constants';

export const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState<EDeviceType>(EDeviceType.Desktop);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let newDeviceType = EDeviceType.Desktop;

            if (SCREEN_SIZE_BREAKPOINT_CHECKERS[EDeviceType.Mobile](width)) {
                newDeviceType = EDeviceType.Mobile;
            } else if (SCREEN_SIZE_BREAKPOINT_CHECKERS[EDeviceType.Tablet](width)) {
                newDeviceType = EDeviceType.Tablet;
            } else {
                newDeviceType = EDeviceType.Desktop;
            }

            setDeviceType(newDeviceType);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        isMobile: deviceType === EDeviceType.Mobile,
        isTablet: deviceType === EDeviceType.Tablet,
        isDesktop: deviceType === EDeviceType.Desktop,
    };
};
