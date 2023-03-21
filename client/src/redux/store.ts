// store here
import React from "react";

import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./slices/product";
import cartReducer from "./slices/cart";
import commentsReducer from "./slices/comment";

const store = configureStore({
    reducer: {
        prouctsList: productsReducer,
        cartList: cartReducer,
        commentList: commentsReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;