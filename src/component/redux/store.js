import {configureStore} from "@reduxjs/toolkit";
import CounderReducer from "./reducer"

export const store = configureStore({
    reducer: CounderReducer
})