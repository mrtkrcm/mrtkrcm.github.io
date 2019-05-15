class Label {
  constructor(context) {
    this.context = context
    this.headers = { 'cache-control': 'no-cache' }
  }

  getByEntityId = entityId => this.context.http
    .get(`/msvc/v1/translations/Label/${entityId}`, null, this.headers)

  get = (entityId, fieldName) => this.context.http
    .get(`/msvc/v1/translations/Label/${entityId}/${fieldName}`, null, this.headers)

  set = (entityType, entityId, fieldName, locale, value) => this.context.http
    .put(`/msvc/v1/translations/${entityType}/${entityId}/${fieldName}/${locale}`, value)

  getAllLabels = () => this.context.http.get('/msvc/v1/translations/Label?entityType=Label', null, this.headers)
}

export default Label
