import { addParameters, configure } from '@storybook/react'

import mfpTheme from './theme-mfp'

// Options:
addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    isToolshown: false,
    theme: mfpTheme
  }
})

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
