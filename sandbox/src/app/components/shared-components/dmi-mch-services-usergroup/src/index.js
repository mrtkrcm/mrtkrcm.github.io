class Usergroup {
  constructor(context) {
    this.context = context
  }

  getAll() {
    return this.context.http.get('/msvc/v1/usergroups/')
  }
}

export default Usergroup
