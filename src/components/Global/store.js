import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import myReducer from "./ProductState";

const persistConfig = {
  key: "root",
  storage,
};
const persisitedReducer = persistReducer(persistConfig, myReducer);

export const store = configureStore({
  reducer: { persisitedReducer },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        }),
});
