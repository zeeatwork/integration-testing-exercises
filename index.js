function divide(a,b) {
  if (b == 0) {
    throw new Error ('Cannot divide by zero');
  }
  return a / b;
}


function sort(list) {
  for(let i = 2; i < list.length; i++){
    let j = i;
    while(j > 0 && list[j - 1] > list[j]){
      let temp = list[j];
      list[j] = list[j - 1];
      list[j - 1] = temp;
      j--;
    }
  }
  return list;
}

module.exports = {divide, sort};