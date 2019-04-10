import styled from 'styled-components'

const LoginWrapper = styled.section`
  margin: 50px auto 23px;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colorLoginBorder};
  max-width: 500px;

  figure {
    margin: 0 0 17px 0;

    svg {
      width: 200px;
    }
  }

  .password-link {
    padding: 0 10px;
    margin-left: 15px;
  }

  label {
    font-size: 15px;
    margin-bottom: 5px;
    display: block;
  }

  .button {
    line-height: 45px;
    height: 45px;
    padding-top: 0;
    padding-bottom: 0;
  }

  input {
    border-color: ${props => props.theme.colorLoginBorder};
  }
`

export default LoginWrapper
