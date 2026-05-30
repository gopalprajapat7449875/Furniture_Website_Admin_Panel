import { configureStore } from "@reduxjs/toolkit"
import AdminSlice  from "./slice"



export const store = configureStore({
reducer:{
AdminStore:AdminSlice
}
})