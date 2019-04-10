import { createGlobalStyle } from 'styled-components'

const GlobalStyle = theme => createGlobalStyle`
  body {
    font-family: ${theme.bodyFont};
    font-size: ${theme.bodySize};
    color: ${theme.colorBody};
    line-height: ${theme.bodyLineHeight};
  }

  #nprogress {
    .bar {
      background: ${theme.colorProgresBar};
    }

    .peg {
      box-shadow: 0 0 10px ${theme.colorProgresBar}, 0 0 5px ${theme.colorProgresBar};
    }

    .spinner-icon {
      border-top-color: ${theme.colorProgresBar};
      border-left-color: ${theme.colorProgresBar};
    }
  }
`
export default GlobalStyle
