// 4.1
const button = document.createElement('button')
button.textContent = 'Click'
button.id = 'btnToClick'

button.addEventListener('click', (event) => {
  console.log(event)
})

document.body.appendChild(button)

// 4.2
document.querySelector('.focus').addEventListener('focus', (event) => {
  console.log(event.target.value)
})

// 4.3
document.querySelector('.value').addEventListener('input', (event) => {
  console.log(event.target.value)
})
