import logger from 'dmi-mch-utils-logger'

export const buildSelectOptions = (arr, keyMap) => {
  try { // to avoid full component/page render crashes
    // map method exist only in Array.prototype. This function may fail in case "arr" argument is not an array.
    // In case API server is down or doesnt provide expected data, default [] should be returned and be logged quietly.
    return arr.map(item => ({
      key: item[keyMap.key],
      value: item[keyMap.value],
      text: item[keyMap.text],
      name: item[keyMap.name]
    }))
  } catch (e) {
    logger(e)
    return []
  }
}

export const buildSelectedWithConvertOptions = (obj, keyMap) => {
  try {
    return obj.map(item => ({
      key: item[keyMap.key],
      value: parseInt(item[keyMap.value], 10),
      text: item[keyMap.text],
      name: item[keyMap.name]
    }))
  } catch (e) {
    logger(e)
    return []
  }
}

export const getSelectedOption = (obj, item) => {
  if (item) {
    const parsedObj = obj.find(i => i.text === item)
    return parsedObj ? parsedObj.value : ''
  }
  return ''
}

export const buildSelectWithNoKeyMap = (obj) => {
  try {
    return obj.map(item => ({
      key: item,
      value: item,
      text: item,
      name: item
    }))
  } catch (e) {
    logger(e)
    return []
  }
}

export const handleNoAutocomplete = (event) => {
  event.target.setAttribute('autocomplete', 'nope')
}

export default {}
