import { getRootCssVariables } from '@storybook-utils/getRootCssVariables';

type TAnimationDurationVars = Array<{
    name: string;
    value: string;
}>;

export const getAnimationDurationVars = (): TAnimationDurationVars => {
    const cssVars = getRootCssVariables();
    const animationDurationVarKeys = Object.keys(cssVars).filter((key) =>
        key.includes('--animation-duration-')
    );
    const sortedAnimationDurationVarKeys = animationDurationVarKeys.sort(
        (currentAnimationDuration, nextAnimationDuration) => {
            const currentColorMultipier = currentAnimationDuration.match(
                /--animation-duration-(\d+)/
            )?.[1];
            const nextColorMultipier = nextAnimationDuration.match(
                /--animation-duration-(\d+)/
            )?.[1];

            return Number(currentColorMultipier) - Number(nextColorMultipier);
        }
    );

    return sortedAnimationDurationVarKeys.reduce(
        (animationDurationVars: TAnimationDurationVars, animationDurationVarKey) => {
            const cssVarValue = cssVars[animationDurationVarKey];

            if (cssVarValue) {
                return [
                    ...animationDurationVars,
                    {
                        name: animationDurationVarKey,
                        value: cssVarValue,
                    },
                ];
            }

            return animationDurationVars;
        },
        []
    );
};
