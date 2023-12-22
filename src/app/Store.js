import { configureStore } from "@reduxjs/toolkit";
import todoSlice  from "../feature/Todo/TodoSlice";


export const Store = configureStore({
   reducer: todoSlice
})