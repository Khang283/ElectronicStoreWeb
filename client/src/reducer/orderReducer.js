import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    orderId: -1,
}

const orderReducer = createSlice({
    initialState: initialState,
    name: 'order',
    reducers: {
        setOrder: (state,action)=>{
            state.orderId = action.payload.orderId;
        },
        loadOrder: (state,action)=>{
            return state.orderId;
        }
    }
})

export const {setOrder, loadOrder} = orderReducer.actions;
export default orderReducer.reducer;