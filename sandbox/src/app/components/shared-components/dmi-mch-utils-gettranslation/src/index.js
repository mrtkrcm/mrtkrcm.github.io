export default function getTranslationByName(labels, language, entityId, fieldName) {
  const filteredObject = labels
    .filter(label => label.key.localeCode
      .toLowerCase() === language.toLowerCase() && label.key.fieldName === fieldName && label.key.entityId === entityId)
  return filteredObject.length > 0 ? filteredObject[0].value : null
}
