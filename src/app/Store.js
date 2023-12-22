import { configureStore } from "@reduxjs/toolkit";
import todoReducer  from "../feature/Todo/TodoSlice";


export const Store = configureStore({
   reducer: todoReducer
})