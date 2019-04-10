import find from 'lodash/find'

const findLabelObj = (filteredObject) => {
  const { labels } = getEnvConfig.mch
  const newObj = filteredObject
  const { entityId, fieldName } = filteredObject[0].key
  find(labels[entityId][fieldName], () => {
    newObj[0].description = labels[entityId][fieldName].description
    newObj[0].type = labels[entityId][fieldName].type
  })
  return newObj
}

const getTranslationByName = (labels, language, fieldName) => {
  const filteredObject = labels
    .filter(label => label.key.localeCode.toLowerCase() === language.toLowerCase() && label.key.fieldName === fieldName)
  const finalLabel = findLabelObj(filteredObject)

  return filteredObject.length > 0 ? {
    entityType: filteredObject[0].key.entityType,
    entityId: filteredObject[0].key.entityId,
    fieldName: filteredObject[0].key.fieldName,
    value: filteredObject[0].value,
    description: finalLabel[0].description,
    type: finalLabel[0].type
  } : null
}

export default getTranslationByName
