import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import cardReducer from "./cardSlice";

const persistConfig = {
    key: 'root',
    storage,
};

// Rename the persisted reducer to avoid conflict
const persistedReducer = persistReducer(persistConfig, cardReducer);

const store = configureStore({
    reducer: {
        mycard: persistedReducer, // Use the renamed variable
    },
});

export default store;
export const persistor = persistStore(store);
