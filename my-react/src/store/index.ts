
import {configureStore} from "@reduxjs/toolkit";
import auth from "./modules/auth";
const store =  configureStore({
    reducer:{
        auth
    }
})
export type Tdispatch = typeof store.dispatch;
export default store;