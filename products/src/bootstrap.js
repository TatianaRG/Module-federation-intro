import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// case 1 : we are sure that there's is such an element with the specific ID in the DOM
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}

// case 2 
// the DOM element that supposed to render the remote is apperaring async
export { mount }
