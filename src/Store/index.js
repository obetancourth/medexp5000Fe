import { createStore } from "redux";
import { rootReducer } from "./Reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistRootReducer = persistReducer({key:'anyValue', storage}, rootReducer);

export const store = createStore(
  persistRootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
// export default  = { store, persistor };
