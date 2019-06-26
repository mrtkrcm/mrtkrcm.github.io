import { create } from '@storybook/theming'

export default create({
  base: 'light',

  colorPrimary: 'rgb(29, 35, 39)', // ab dark
  // colorSecondary: 'deepskyblue',

  // UI
  appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#1d2327', // AB black text
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Multi-Fair Platform',
  brandUrl: 'https://www.artbasel.com'
  // brandImage: 'https://placehold.it/350x150'
})
