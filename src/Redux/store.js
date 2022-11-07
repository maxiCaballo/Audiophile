import { configureStore, combineReducers } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./hamburgerMenuSlice";
import cartReducer from "./cartSlice";
//Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  hamburgerMenu: hamburgerMenuReducer,
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);

//Sin persistencia
/*
export const store = configureStore({
  reducer: {
    hamburgerMenu: hamburgerMenuReducer,
    cart: cartReducer,
  },
});
*/
