export const configLabels = (labels) => {
  const newLabels = []
  Object.keys(labels).forEach((category) => {
    const keys = Object.keys(labels[category])
    keys.forEach((labelField, index) => {
      const obj = {}
      obj.entityId = category
      obj.key = `${category}.${keys[index]}`
      Object.keys(labels[category][labelField]).forEach((property) => {
        obj[property] = labels[category][labelField][property]
      })
      newLabels.push(obj)
    })
    return null
  })
  return newLabels
}

export const addLabelsValues = (configData, translationsData) => {
  const newData = configData
  newData.forEach((item) => {
    const newItem = item
    const findItem = translationsData.find(
      o => o.key.entityId === newItem.entityId
        && o.key.fieldName === newItem.key.split('.')[1]
        && o.key.localeCode === 'en'
    )

    if (typeof findItem !== 'undefined') {
      newItem.value = findItem.value
    }
  })
  return newData
}

export const filterOptions = (configLabelsObj) => {
  const data = [{ value: 'all', label: 'All' }]
  Object.keys(configLabelsObj).map(item => data.push({ value: item, label: item }))
  return data
}
