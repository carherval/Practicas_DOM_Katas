// 3.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const ul = document.createElement('ul')

countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})

document.body.appendChild(ul)

// 3.2
document.querySelector('.fn-remove-me').remove()

// 3.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const ul2 = document.createElement('ul')

cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  ul2.appendChild(li)
})

document.querySelector('[data-function="printHere"]').appendChild(ul2)

// 3.4
// const countries = [
const divTags = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

divTags.forEach((divTag) => {
  const div = document.createElement('div')
  const h4 = document.createElement('h4')
  h4.textContent = divTag.title
  const img = document.createElement('img')
  img.src = divTag.imgUrl
  div.appendChild(h4)
  div.appendChild(img)
  document.body.appendChild(div)
})

// 3.5
const removeLastDiv = () => {
  const listH4 = document.querySelectorAll('h4')
  if (listH4.length > 0) {
    listH4[listH4.length - 1].parentNode.remove()
  }
}

const button = document.createElement('button')
button.textContent = 'Borrar último DIV'
button.onclick = removeLastDiv
document.body.appendChild(button)

// 3.6
document.querySelectorAll('h4').forEach((h4) => {
  const button = document.createElement('button')
  button.textContent = 'Borrar DIV'
  button.setAttribute('onclick', 'javascript:this.parentNode.remove()')
  h4.parentNode.appendChild(button)
})
