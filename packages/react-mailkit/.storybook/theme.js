import { create } from '@storybook/theming';
import logo from './assets/logo.png';

export const theme = create({
  base: 'dark',
  appBorderRadius: 3,
  colorPrimary: '#86c232',
  colorSecondary: '#86c232',
  barSelectedColor: '#86c232',
  barTextColor: '#86c232',
  barSelectedColor: '#86c232',
  gridCellSize: 12,
  brandTitle: 'react-mailkit storybook',
  brandUrl: 'https://react-mailkit.io',
  brandImage: logo,
});
