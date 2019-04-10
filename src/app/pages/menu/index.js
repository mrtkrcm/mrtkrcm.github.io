import { compose, setDisplayName } from 'recompose'
import { Container } from 'semantic-ui-react'
import WrappersList from '../../components/WrappersList'
import { logoutTabs } from '../../utils/storage'

const { useEffect, useState } = React

const MenuPage = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    logoutTabs()
    setLoading(false)
  }, [])

  return !loading ? (
    <Container>
      <WrappersList {...props} />
    </Container>
  ) : null
}

export default compose(
  setDisplayName('CmsPageMenu')
)(MenuPage)
