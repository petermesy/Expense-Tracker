import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"
//LoginAction

export const loginUserAction=createAsyncThunk("user/login",async(payload,{
    rejectWithValue,getState,dispatch})=>{
        const config={
            headers:{
                "Content-Type":"application/json"
            },
        };
        try {
            //make http call
            const data=await axios.post("http://localhost:5000/api/users/login",
                payload,
                config);
        return data
        } catch (error) {
           if(!error?.res) {
            throw error
           }
           return rejectWithValue(error?.res?.data);
        }
} )


//slices

const userSlices= createSlice({
    name:'users',
    initialState:{},
    extraReducers:builder=>{
        //handle pending
        builder.addCase(loginUserAction.pending,(state,action)=>{
            state.userLoading=true;
            state.userAppErr=undefined;
            state.usersServerErr=undefined;

        })
        builder.addCase(loginUserAction.fulfilled,(state,action)=>{
            state.userAuth=action?.payload;
            state.userLoading=false;
            state.userAppErr=undefined;
            state.usersServerErr=undefined;

        });
        builder.addCase(loginUserAction.rejected,(state,action)=>{
            state.userLoading=false;
            state.userAppErr=action?.payload?.message;
            state.usersServerErr=action?.error?.message;
        })
    }
})
export default userSlices.reducer;