import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const myTheme = create({
    base: 'dark',

    brandTitle:
        '<div style="display: flex; gap: 8px; align-items: center;"><img src="./static/logo.svg" width="60px" height="60px" /><span style="font-size: 32px; line-height: 38px;">Packages</span></div>',
    brandUrl: 'https://github.com/Emingy/packages',
    // brandImage: '/logo.svg',

    colorPrimary: '#311cc4',
    colorSecondary: '#614df0',

    appBg: '#181818',

    appContentBg: '#262626',

    appBorderColor: '#555555',
    appBorderRadius: 4,

    appPreviewBg: '#262626',

    barTextColor: '#f7f7f7',
    barSelectedColor: '#3f28e7',
    barBg: '#181818',
    barHoverColor: '#311cc4',

    inputBorder: '#6d6d6d',
    inputTextColor: '#f7f7f7',
    inputBorderRadius: 4,
});

export default myTheme;

addons.setConfig({
    theme: myTheme,
});
