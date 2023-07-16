import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from "../actions/burger-constructor";

const initialState = {
  bun: {},
  mains: [],
};

export const burgerConstructor = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      switch (action.payload.type) {
        case "main":
          return { ...state, mains: [...state.mains, action.payload] };
        case "bun":
          return { ...state, bun: action.payload };
        case "sauce":
          return { ...state, mains: [...state.mains, action.payload] };
        default:
          return state;
      }
    case DELETE_INGREDIENT:
      console.log(state.action);
      return state;
    default:
      return state;
  }
};
