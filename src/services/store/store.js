import { applyMiddleware, legacy_createStore } from "redux";
import { rootReducer } from "../reducers/root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

