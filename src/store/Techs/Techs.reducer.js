import { techs } from "../../mocks/techs";

export const reducer = (state = techs, action) => {
  switch (action.type) {
    case "ADD_TECH":
      return [...state, action.payload];

    default:
      return state;
  }
};
