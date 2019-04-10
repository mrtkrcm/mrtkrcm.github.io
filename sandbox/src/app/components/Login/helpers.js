export const errorCodeMessages = (status) => {
  const error = {
    200: '',
    401: 'Invalid username / password combination.',
    403: 'Not authorized to access.',
    500: 'Server error.',
    504: 'Gateway Timeout',
    required: 'Username and password are required.'
  }
  return typeof error[status] === 'undefined' ? error['401'] : error[status]
}

export default {}
