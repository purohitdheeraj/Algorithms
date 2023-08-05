export const findCharacter = (str) => {
  // Write your code here
  let nonRepeatChar = null
  
  const freqCount = {}

  str.split('').forEach(char => {
    freqCount[char] = (freqCount[char] || 0 ) + 1 
  })


  for(let i=0; i<str.length; i++){
    let char = str[i]
    if(freqCount[char] === 1){
      return char
    }
  }

  return nonRepeatChar
}

findCharacter("hello"); // Output: "h"
findCharacter("abbcddee"); // Output: "c"
findCharacter("aabbcc"); // Output: null