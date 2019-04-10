import isEmpty from 'lodash/isEmpty'

const validateAxiosResponse = (res = null) => res && res.ok && 'data' in res && !isEmpty(res.data)

export default validateAxiosResponse
