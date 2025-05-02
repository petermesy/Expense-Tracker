import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from "axios"
import baseURL from '../../../utils/baseURL';

//LoginAction

export const loginUserAction=createAsyncThunk("user/login",
    async(payload,{
    rejectWithValue})=>{
        const config={
            headers:{
                "Content-Type":"application/json"
            },
        };
        try {
            //make http call
            const data=await axios.post(
                `${baseURL}/users/login`,
                payload,
                config);
              //Save user in to local storage
                localStorage.setItem('userInfo',JSON.stringify(data))
        return data
        } catch (error) {
           if(!error?.response) {
            throw error
           }
           return rejectWithValue(error?.response?.data);
        }
} )

export const registerUserAction = createAsyncThunk(
    "user/register",
    async (payload, { rejectWithValue }) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      try {
        // Make HTTP call
        const { data } = await axios.post(
          `${baseURL}/users/register`,
          payload,
          config
        );
        return data; // Return only the serializable data
      } catch (error) {
        if (!error?.response) {
          throw error;
        }
        return rejectWithValue(error?.response?.data);
      }
    }
  );


//slices
// get user form localstorage and place it insode redux store
const userLoginFromStorage=localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem("userInfo")):undefined;

const userSlices= createSlice({
    name:'users',
    initialState:{
      user:userLoginFromStorage
    },
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
        builder.addCase(loginUserAction.rejected, (state, action) => {
          state.userLoading = false;
          state.userAppErr = action?.payload?.message;
          state.userServerErr = action?.error?.message;
        });

        //register 
        builder.addCase(registerUserAction.pending,(state,action)=>{
            state.userLoading=true;
            state.userAppErr=undefined;
            state.usersServerErr=undefined;

        })
        builder.addCase(registerUserAction.fulfilled,(state,action)=>{
            state.userAuth=action?.payload;
            state.userLoading=false;
            state.userAppErr=undefined;
            state.usersServerErr=undefined;

        });
        builder.addCase(registerUserAction.rejected, (state, action) => {
          state.userLoading = false;
          state.userAppErr = action?.payload?.message; // Set application error
          state.userServerErr = action?.error?.message; // Set server error
        });
    }
})
export default userSlices.reducer;