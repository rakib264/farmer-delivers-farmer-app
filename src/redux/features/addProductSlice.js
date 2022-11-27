import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/credentials";
import axios from 'axios'

// export const onAddProduct = createAsyncThunk(
//     'addProductSlice/add',
//     async({name, category, description, price, quantity, foodType, readyTime, image}, thunkAPI) => {
//         try{
//            const response = await axios.post(`$BASE_URL/vendor/add/food`, {
//             name, category, description, price, quantity, foodType, readyTime, image
//            })
//            return response.data
//         } catch(err){
//             return err;
//         }
//     }
// )



const initialState = {
    productData: {},
    error: undefined,
    isLoading: false
}

const addProductSlice = createSlice({
    name: 'addProductSlice',
    initialState,
    reducers:{

    },
    // extraReducers: {
    //     [onAddProduct.pending] : (state) => {
    //         state.isLoading = true;
    //     },
    //     [onAddProduct.fulfilled] : (state, action) => {
    //         state.isLoading = false;
    //         state.productData = action.payload;
    //     },
    //     [onAddProduct.rejected] : (state) => {
    //         state.isLoading = false;
    //         state.error = action.payload;
    //     },
    // }, 
})

export default addProductSlice.reducer;