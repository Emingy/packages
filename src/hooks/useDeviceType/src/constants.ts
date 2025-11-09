export enum EDeviceType {
    Mobile = 'mobile',
    Tablet = 'tablet',
    Desktop = 'desktop',
}
export const SCREEN_SIZE_BREAKPOINT_CHECKERS: Record<EDeviceType, (width: number) => boolean> = {
    [EDeviceType.Mobile]: (width: number) => width < 600,
    [EDeviceType.Tablet]: (width: number) => width >= 600 && width <= 1024,
    [EDeviceType.Desktop]: (width: number) => width > 1024,
};
