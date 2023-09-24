import faker from "faker";

const mountCart = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items added to the cart</div>`;

  el.innerHTML = cartText;
};

// case 1 : we are sure that there's is such an element with the specific ID in the DOM
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mountCart(el);
  }
}

//case 2: host app imports this function
export { mountCart }