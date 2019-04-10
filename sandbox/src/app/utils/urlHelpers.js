import qs from 'query-string'

export const handleClientPath = ({ pathname }) => ({ url: pathname || window.location.pathname })

export const handleServerPath = req => ({ url: req && 'url' in req ? req.url : null })

export const cmsPageUrl = (slug, page = '/index', extraParams = null) => {
  let url = `${page}?slug=${slug}`
  if (extraParams) {
    url += `&${qs.stringify(extraParams)}`
  }
  return url
}
