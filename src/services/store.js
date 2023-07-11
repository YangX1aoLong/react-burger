import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reducer } from "./reducer"
export const configureStore = (initialStore) => {
    const store = createStore(
        reducer,
        initialStore,
        composeWithDevTools(),
    )
    return store;
}