import { configureStore } from '@reduxjs/toolkit';
import addProductSlice from './features/addProductSlice';

// import { userSlice, shoppingSlice, cartSlice} from './features';
// import {
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist'


export const store = configureStore({
    reducer: {
        addProduct: addProductSlice
    },
    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // })
})