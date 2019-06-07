/**
 * This class contains the services for Events. The constructor requires a context to be passed.
 * When using the Event Class, it will require a context to be passed. The context contains the
 * http object, which is specific for each environment
 */

class Account {
  constructor(context) {
    this.context = context
  }

  getMine() {
    return this.context.http.get('/msvc/v1/accounts/mine')
  }

  getMineAddresses(id) {
    return this.context.http.get(`/msvc/v1/accounts/mine/${id}/addresses`)
  }

  getOwnerAddresses(id) {
    return this.context.http.get(`/msvc/v1/accounts/items/${id}/addresses`)
  }
}

export default Account
