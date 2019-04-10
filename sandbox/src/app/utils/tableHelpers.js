/*
@param { sortBy } string - whats the current sort filter in your state
@param { isAscending } bool - whats the current value of your state
@param {entity } string - whats the current sort filter you want to apply
*/
export const toggleSort = (sortBy, isAscending, entity) => {
  if (sortBy === entity && typeof isAscending !== 'undefined') {
    return !isAscending ? 'desc' : 'asc'
  }
  return ''
}

export default {}
