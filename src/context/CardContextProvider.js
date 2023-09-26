import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkOut: false,
};
const sumItems = (items) => {
  const itemsCounter = items.reduce(
    (total, product) => total + product.quantity,
    0
  );
  const total = items
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemsCounter: itemsCounter, total: total };
};

const cardReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkOut: false,
      };
    case "REMOVE_ITEM":
      const newSelectedItem = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );

      return {
        ...state,
        selectedItems: [...newSelectedItem],
        ...sumItems(state.selectedItems),
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return { ...state, ...sumItems(state.selectedItems) };

    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return { ...state };

    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkOut: true,
      };

    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkOut: false,
      };
    default:
      return state;
  }
};

export const cardContext = createContext();
const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardReducer, initialState);

  return (
    <cardContext.Provider value={{ state, dispatch }}>
      {children}
    </cardContext.Provider>
  );
};

export default CardContextProvider;
