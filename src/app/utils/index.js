import { memoPx2Rem as px2rem, memoHiDPI as hiDPIpx } from './cssHelpers'
import storage, { setUserTokens as setUserCookies } from './storage'
import silentLogger from './logger'
import cmsBreadcrumb from './cmsBreadcrumb'
import { handleClientPath, handleServerPath, cmsPageUrl } from './urlHelpers'
import { findObjByKey, findLabels } from './objectHelpers'
import validateAxiosResponse from './validateAxiosResponse'
import getTranslationByName from './getTranslationByName'
import Dropdown from './dropdown'
import { toggleSort } from './tableHelpers'

const logger = silentLogger

export {
  px2rem,
  hiDPIpx,
  storage,
  setUserCookies,
  logger,
  cmsBreadcrumb,
  handleClientPath,
  handleServerPath,
  cmsPageUrl,
  findObjByKey,
  findLabels,
  validateAxiosResponse,
  getTranslationByName,
  Dropdown,
  toggleSort
}
