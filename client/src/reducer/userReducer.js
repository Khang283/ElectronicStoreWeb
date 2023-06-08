import { createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState ={
    value: 1,
    userId: -1,
    username: '',
    role: 'USER',
    isLoad: false,
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action)=>{
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.role = action.payload.role;
            state.isLoad = true;
        },
        loadUser: async (state,action) =>{
            await axios.get('/api/user/me',{
                headers: {
                    Authorization: `Bearer ${action.payload}`,
                }
            })
            .then(res=>{
                if(res.status===200){
                    state.userId = res.data.userId;
                    state.username = res.data.username;
                    state.role = res.data.role;
                    state.isLoad = true;
                }
            })
            .catch(e=>{
                state.isLoad = false;
                state.userId = -1;
            });
        }
    }
});

export const {setUser,loadUser} = userReducer.actions;
export default userReducer.reducer;