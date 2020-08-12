let Wrd = txt => {
  let wrdArr = txt.split(' ')
  let maxLength = 0
  let result = ''
  for (let j of wrdArr) {
      if (j.length > maxLength) {
          maxLength = j.length
          result = j
      }
  }
  return result
}
