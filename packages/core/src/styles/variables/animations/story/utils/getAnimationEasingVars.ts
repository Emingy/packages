import { getRootCssVariables } from '@storybook-utils/getRootCssVariables';

type TAnimationEasingVars = Array<{
    name: string;
    value: string;
}>;

export const getAnimationEasingVars = (): TAnimationEasingVars => {
    const cssVars = getRootCssVariables();
    const animationEasingVarKeys = Object.keys(cssVars).filter((key) =>
        key.includes('--animation-easing-')
    );
    const sortedAnimationEasingVarKeys = animationEasingVarKeys.sort(
        (currentAnimationEasing, nextAnimationEasing) => {
            const currentColorMultipier =
                currentAnimationEasing.match(/--animation-easing-(\d+)/)?.[1];
            const nextColorMultipier = nextAnimationEasing.match(/--animation-easing-(\d+)/)?.[1];

            return Number(currentColorMultipier) - Number(nextColorMultipier);
        }
    );

    return sortedAnimationEasingVarKeys.reduce(
        (animationEasingVars: TAnimationEasingVars, animationEasingVarKey) => {
            const cssVarValue = cssVars[animationEasingVarKey];

            if (cssVarValue) {
                return [
                    ...animationEasingVars,
                    {
                        name: animationEasingVarKey,
                        value: cssVarValue,
                    },
                ];
            }

            return animationEasingVars;
        },
        []
    );
};
