import styled from 'styled-components'

const HeaderStyles = styled.section`
  .ui.menu {
    height: 68px;
    color: ${({ theme }) => theme.colorWhite};
    background: ${({ theme }) => theme.colorDark};
    border-radius: 0;
    border: none;
    box-shadow: none;

    .left.menu {
      & > a {
        padding-left: 0;
        margin-left: 0;
      }
    }
  }

  svg {
    width: 120px;
    fill: ${({ theme }) => theme.colorWhite};
    color: ${({ theme }) => theme.colorWhite};
  }
`

export default HeaderStyles
