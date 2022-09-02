import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import LoginApi from "../Redux/Middleware/LoginApi";
import combineData from "../Redux/Reducers/combineReducer";

export const store = configureStore( {
    reducer : combineData,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(LoginApi)
})