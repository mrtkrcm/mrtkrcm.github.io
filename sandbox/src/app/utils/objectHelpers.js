export const findObjByKey = (object, key, value) => {
  let objByKey = null
  Object.keys(object).forEach((item) => {
    if (object[item][key] === value) {
      objByKey = object[item]
    }
  })
  return objByKey
}

export const findLabels = (labels, language) => labels.find(label => label.key.localeCode === language)
