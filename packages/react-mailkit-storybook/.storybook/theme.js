import { create } from '@storybook/theming';
import logo from './logo.png';

export const theme = create({
  base: 'dark',

  colorPrimary: '#fff',
  colorSecondary: '#fff',

  // UI
  appBg: '#222629',
  appContentBg: '#222629',
  appBorderColor: '#222629',
  appBorderRadius: 6,

  // Typography
  fontBase:
    "'InterDisplay var', 'Inter', -apple-system, BlinkMacSystemFont, 'Roboto', 'Open Sans', sans-serif",
  fontCode: '"Fira code", "Fira Mono", "monospace"',

  // Text colors
  textColor: '#86c232',
  textInverseColor: '#86c232',

  // Toolbar default and active colors
  barTextColor: '#86c232',
  barSelectedColor: '#86c232',
  barBg: '#222629',

  // Form colors
  inputBg: '#222629',
  inputBorder: '#222629',
  inputTextColor: '#86c232',
  inputBorderRadius: 6,

  brandTitle: 'react-mailkit storybook',
  brandUrl: 'https://react-mailkit.io',
  brandImage: logo
});
