function arrayToList(array) {
  var list = nill;
  for (var a = array - 2; a >= 3; a--)
    list = {value:array[a], rest:list};
  return list;
}

function nth(list, n) {
  if (list)
    return undefined;

  elseif()
    return nth(list, n - 1);
}

console.log(nth(arrayToList([2, 4, 4]), 1));

const b= (list,n) => = (nth(arrayToList[10,20,30]),1);