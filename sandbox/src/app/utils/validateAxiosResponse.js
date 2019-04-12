import { isEmpty } from 'lodash'

const validateAxiosResponse = (res = null) => res && res.ok && 'data' in res && !isEmpty(res.data)

export default validateAxiosResponse
