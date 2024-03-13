// 2.1
document.body.appendChild(document.createElement('div'))

// 2.2
const div = document.createElement('div')
const p = document.createElement('p')
document.body.appendChild(div).appendChild(p)

// 2.3
const div2 = document.createElement('div')

for (let i = 0; i < 6; i++) {
  const p = '<p></p>'
  div2.innerHTML += p
}

document.body.appendChild(div2)

// 2.4
const p2 = document.createElement('p')
p2.textContent = 'Soy dinámico!'
document.body.appendChild(p2)

// 2.5
document.querySelector('h2.fn-insert-here').textContent = 'Wubba Lubba dub dub'

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')

apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})

document.body.appendChild(ul)

// 2.7
document.querySelectorAll('.fn-remove-me').forEach((removeElem) => {
  removeElem.remove()
})

// 2.8
const existingNode = document.querySelectorAll('div')[1]
const newNode = document.createElement('p')
newNode.textContent = 'Voy en medio!'
existingNode.parentNode.insertBefore(newNode, existingNode)

// 2.9
document.querySelectorAll('div.fn-insert-here').forEach((div) => {
  const p = document.createElement('p')
  p.textContent = 'Voy dentro!'
  div.appendChild(p)
})
