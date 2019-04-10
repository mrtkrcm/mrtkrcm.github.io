import styled from 'styled-components'

const LabelsWrapper = styled.section`
  margin: 25px 0 80px 0;

  thead > tr {
    & th {
      width: 28.66%;

      &:nth-child(1) {
        width: 14%;
      }
    }
  }

  tbody > tr {
    & td {
      width: 30%;

      &:nth-child(1) {
        width: 10%;
      }
    }
  }
`

export default LabelsWrapper
