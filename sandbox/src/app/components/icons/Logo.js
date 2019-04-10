// todo: improve this logic, only 1 component should be loaded
import LogoAB from '../../static/svg/logo-ab.svg'
import LogoGB from '../../static/svg/logo-gb.svg'

export default () => {
  const { theme } = getEnvConfig.mch.cms
  if (theme === 'ab') {
    return (<LogoAB />)
  }
  if (theme === 'gb') {
    return (<LogoGB />)
  }
  return null
}
