
function cloneDeep (obj) {
  if (obj == null || typeof (obj) !== 'object') {
    return obj
  }

  var temp = new obj.constructor()

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      temp[key] = cloneDeep(obj[key])
    }
  }

  return temp
}

export default cloneDeep
