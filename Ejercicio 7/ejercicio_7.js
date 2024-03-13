const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
const ul = document.createElement('ul')

places.forEach((place) => {
  const li = document.createElement('li')
  li.textContent = place
  ul.appendChild(li)
})

document.querySelector('[data-function="printHere"]').appendChild(ul)
