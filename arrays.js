var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr, element){
  var modified = [element, ...arr]
  return modified
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr
}

function accessElementInArray(arr, index){
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr){
  arr.shift()
  return arr
}

function removeElementFromBeginningOfArray(arr){
  arr.slice(1)
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element)
  return arr
}

function addElementToEndOfArray(arr, element){
  var modified = [...arr, element]
  return modified
}

function destructivelyAddElementToEndOfArray(arr, element){
  arr.push(element);
  return arr
}

function removeElementFromBeginningOfArray(arr){
  arr.shift();
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.slice(1);
  return arr
}

function removeElementFromEndOfArray(arr){
  arr.pop();
  return arr
}

function destructivelyRemoveElementFromEndOfArray(arr){
  arr.pop(-1);
  return arr
}
