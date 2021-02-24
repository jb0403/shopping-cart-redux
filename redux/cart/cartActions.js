import {
  CARTDECREASE,
  CARTINCREASE,
  CARTREMOVE,
  CLEAR_CART,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./cartTypes";

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
export const cartIncrease = (id) => {
  // console.log(id);
  return {
    type: CARTINCREASE,
    payload: {
      id,
    },
  };
};
export const cartDecrease = (id, amount) => {
  return {
    type: CARTDECREASE,
    payload: {
      id,
      amount,
    },
  };
};
export const cartRemove = (id) => {
  return {
    type: CARTREMOVE,
    payload: {
      id,
    },
  };
};
export const getTotals = () => {
  return {
    type: GET_TOTALS,
  };
};

export const toggleAcn = (id, toggle) => {
  console.log("id of toggle", id);
  console.log("toggle of toggle", toggle);
  return {
    type: TOGGLE_AMOUNT,
    payload: {
      id,
      toggle,
    },
  };
};
