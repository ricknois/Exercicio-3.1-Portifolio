let fat = num => {
  let resp = 1
  for (let index = 2; index < num; index++) {
    resp *= index;
    
  }

  return resp
}

