import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userSlice from "./slice/user.js";

export const rootReducer = combineReducers({
    userSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store;