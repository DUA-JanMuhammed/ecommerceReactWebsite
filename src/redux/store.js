import { createStore} from "redux";
import rootReducer from "./RootReducer"
import { composeWithDevTools } from 'redux-devtools-extension';
import {persistStore,persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig ={
    key: "cartData",
    storage
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer,composeWithDevTools());
const persistor = persistStore(store)


export default store;
export{persistor};