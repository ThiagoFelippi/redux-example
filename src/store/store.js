import { createStore } from "redux";
import { reducer as techReducer } from "./Techs/Techs.reducer";

export const store = createStore(techReducer);
