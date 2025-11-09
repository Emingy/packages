import { getRootCssVariables } from '@storybook-utils/getRootCssVariables';

type TSpacingVars = Array<{
    name: string;
    value: string;
}>;

export const getSpacingVars = (): TSpacingVars => {
    const cssVars = getRootCssVariables();
    const spacingVarKeys = Object.keys(cssVars).filter((key) => key.includes('--spacing-'));
    const sortedSpacingVarKeys = spacingVarKeys.sort((currentSpacing, nextSpacing) => {
        const currentColorMultipier = currentSpacing.match(/--spacing-(\d+)/)?.[1];
        const nextColorMultipier = nextSpacing.match(/--spacing-(\d+)/)?.[1];

        return Number(currentColorMultipier) - Number(nextColorMultipier);
    });

    return sortedSpacingVarKeys.reduce((spacingVars: TSpacingVars, spacingVarKey) => {
        const cssVarValue = cssVars[spacingVarKey];

        if (cssVarValue) {
            return [
                ...spacingVars,
                {
                    name: spacingVarKey,
                    value: cssVarValue,
                },
            ];
        }

        return spacingVars;
    }, []);
};
