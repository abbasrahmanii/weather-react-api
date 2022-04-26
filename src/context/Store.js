import React, { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  number: 0,
};

// const reducer = (state,action) => {
//     switch(action){
//         case 'ADD':{
//             return {
//                 ...state,
//                 number: state.number + 1,
//             }}
//         default:
//             return state,
//     }
//     }

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        number: state.number + 1,
      };
    case "CART_REMOVE_ITEM": {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <StoreProvider value={value}>{props.children}</StoreProvider>;
};
