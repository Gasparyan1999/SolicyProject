import { configureStore } from "@reduxjs/toolkit";
import {reducer} from "./Index"



export const store=configureStore({
    reducer:{
        move:reducer
    }
})

export default store