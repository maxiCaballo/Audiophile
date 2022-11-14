import { configureStore, combineReducers } from "@reduxjs/toolkit";
import hamburgerMenuReducer from "./hamburgerMenuSlice";
import cartReducer from "./cartSlice";
import authReducer from "./auth/authSlice";
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
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
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
/*
 serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
*/
