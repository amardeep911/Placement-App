import { createSlice } from "@reduxjs/toolkit";
import { ReduxModel } from "../../utils/types";
import { registerUser } from "../actions/action";
import { act } from "react-test-renderer";
export const initialState:ReduxModel ={
    auth: false,
    user: "",
    accessToken: "",
    refreshToken: "",
    loading: false,
    error: false,

}

const AuthUserSLice = createSlice({
    name: "authUser",
    initialState,
    reducers: {

        addUser: (state, action) => {
            state.accessToken = action.payload.accessToken;
        }
        
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            
            state.loading = true;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {

            state.loading = false;
            state.accessToken = action.payload.token.access;
            state.refreshToken = action.payload.token.refresh;
            state.auth = true;
        })
        builder.addCase(registerUser.rejected, (state, action) => {
            console.log(action.payload)
            state.loading = false;
            state.auth = false;
            state.error = true;
            

        }
        )
        
       
     
    }
   
})

export default AuthUserSLice.reducer;
export const {addUser} = AuthUserSLice.actions;

// 'http://110.0.2.2:8000/api/user/register/