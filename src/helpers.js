export const API = "http://34.88.174.223";

export const CART = {
  GET_CART: "GET_CART",
  GET_CART_LENGTH: "GET_CART_LENGTH",
};

export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.products.length : 0;
}

export const calcSubPrice = (product) => +product.count * product.item.price;
export const calcTotalPrice = (products) => {
  return products.reduce((acc, curr) => {
    return (acc += curr.subPrice);
  }, 0);
};
