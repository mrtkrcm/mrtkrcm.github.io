
import { Container, Menu } from 'dmi-ui/components'
import Link from 'next/link'

import Logo from 'icons/Logo'
import HeaderStyles from './Header.styles'

const Header = () => (
  <HeaderStyles>
    <Menu inverted>
      <Container>
        <Menu.Menu position='left'>
          <Link href='/menu' as='/menu'>
            <Menu.Item name='home'>
              <Logo />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
    </Menu>
  </HeaderStyles>
)

export default Header
