// 1. First, find our UL Container
let chars = document.querySelector('.characters')
// 2. Create our Ajax Request
let url = 'http://swapi.co/api/people/'

fetch(url).then(response => response.json()).then(data => {
  for (var i = 0; i < data.results.length; i++) {
    let newli = document.createElement('li')
    newli.textContent = data.results[i].name
    chars.appendChild(newli)
  }
})
