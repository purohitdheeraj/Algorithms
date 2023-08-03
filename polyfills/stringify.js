export const stringify = (value) => {
  // Write your code here
  const isPrimitive = value !== Object(value) && value !== undefined
  const isString = typeof value === 'string'
  const isArray = Array.isArray(value)
  const isObject = typeof value === "object"

  if(typeof value === null){
    return "null"
  }

  if(typeof value === "undefined" || typeof value === "symbol" || typeof value === "function"){
    return undefined
  }

  if(isString){
    return value.replace(/(.*)/,'"$1"')
  }

  if(isPrimitive){
    return String(value)
  }

  if(isArray){
    return `[${value.map(stringify).join(',')}]`
  }
  
  if(isObject){
    let result = ""

    for(let key in value){
      let item = stringify(value[key])
      if(item !== undefined){
        result += `"${key}":${item},`
      }   
      
    }
    return `{${result.slice(0, -1)}}`    
  }

  return value
}
