import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slices/AuthUserSlice";
import logger from "redux-logger";

export const Store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),

    reducer: {
        authUser: AuthReducer,
    }, 
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;