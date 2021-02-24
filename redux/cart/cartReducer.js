import {
  CARTDECREASE,
  CARTINCREASE,
  CARTREMOVE,
  CLEAR_CART,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./cartTypes";
import CartItems from "../../cart-items";

const initialState = {
  // count: 7,
  // cart: CartItems,
  // total: 105,
  // amount: 0,
};

const cartReducer = (state = { cart: CartItems }, action) => {
  switch (action.type) {
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    case CARTDECREASE:
      let tempCartt = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount - 1 };
        }
        return item;
      });

      return { ...state, cart: tempCartt };

    case CARTINCREASE:
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };

    case CARTREMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case GET_TOTALS:
      console.log("Get Totals");
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return {
        ...state,
        total,
        amount,
      };
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === "inc") {
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
            }
            if (action.payload.toggle === "dec") {
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
            }
          }
          return cartItem;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
