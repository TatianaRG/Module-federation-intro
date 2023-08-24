import faker from 'faker'

const cartText = `<div>You have ${faker.random.number()} items added to the cart</div>`

document.querySelector('#dev-cart').innerHTML = cartText
