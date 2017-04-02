function getFirstSelector(selector){
  var element = document.querySelector(selector)
  return element
}

function nestedTarget(){
  var element = document.getElementById('nested').querySelector('div.target')
  return element
}

function increaseRankBy(n){
  const list = document.getElementById("app").querySelectorAll('ul.ranked-list')

  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n  
  } 
  return list
}

function deepestChild(){
  var current = document.getElementById('grand-node').querySelector('div')
  var next = current
  
  while (next !== null) {
    next = current.querySelector('div')
    if (next === null) {
      return current
    }
    current = current.querySelector('div')
    } 
  return null
  
}