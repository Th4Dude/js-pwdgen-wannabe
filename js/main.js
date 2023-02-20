const firstName = prompt(`inserisci il tuo nome`)
const lastName = prompt(`inserisci il tuo cognome`)
const favoriteColor = prompt(`colore preferito`)

const password = `La password è, ${firstName}${lastName}${favoriteColor}`

console.log(password)

document.querySelector(`h1`).innerHTML = password

