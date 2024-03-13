// 1.1
console.log(document.querySelector('.showme').outerHTML)

// 1.2
console.log(document.querySelector('#pillado').textContent)

// 1.3
document.querySelectorAll('p').forEach((p) => {
  console.log(p.textContent)
})

// 1.4
document.querySelectorAll('.pokemon').forEach((pokemon) => {
  console.log(pokemon.textContent)
})
// 1.5
document.querySelectorAll('[data-function="testMe"]').forEach((span) => {
  console.log(span.textContent)
})

// 1.6
console.log(
  document.querySelectorAll('[data-function="testMe"]')[2].textContent
)
