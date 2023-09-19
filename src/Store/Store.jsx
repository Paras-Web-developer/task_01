import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const Reducer = combineReducers({
  cart: cartReducer,
  
})

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, Reducer);
const store = configureStore({
  reducer: persistedReducer
});

export default store;
export const persister = persistStore(store)






