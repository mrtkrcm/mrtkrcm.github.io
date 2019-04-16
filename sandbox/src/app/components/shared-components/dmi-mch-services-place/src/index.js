/**
 * This class contains the services for Place / Google. The constructor requires a context to be passed.
 * When using the Place Class, it will require a context to be passed. The context contains the
 * http object, which is specific for each environment
 */
class Place {
  constructor(context) {
    this.context = context
  }

  get(id) {
    return this.context.http.get(`/msvc/v1/places/items/${id}`)
  }
}

export default Place
