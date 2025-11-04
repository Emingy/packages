export const getRootCssVariables = () => {
    const rootElement = document.documentElement;
    const styles = window.getComputedStyle(rootElement);
    const cssVariables: Record<string, string> = {};

    for (let i = 0; i < styles.length; i++) {
        const propertyName = styles[i];

        if (propertyName.startsWith('--')) {
            const propertyValue = styles.getPropertyValue(propertyName).trim();

            cssVariables[propertyName] = propertyValue;
        }
    }

    return cssVariables;
};
