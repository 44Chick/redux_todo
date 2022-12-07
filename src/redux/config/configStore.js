import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key : 'root',
  storage,
  whitelist : ['todos']
}

const rootReducer = combineReducers({
  todos,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(persistedReducer);

const persistor = persistStore(store);
export {persistor};
export default store;