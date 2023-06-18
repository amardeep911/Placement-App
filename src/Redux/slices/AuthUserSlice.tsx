import {createSlice} from '@reduxjs/toolkit';
import {ReduxModel} from '../../utils/types';
import {registerUser} from '../actions/action';
import {act} from 'react-test-renderer';
export const initialState: ReduxModel = {
  auth: false,
  user: '',
  accessToken: '',
  refreshToken: '',
  loading: false,
  error: "",
  success: false,

};

interface RegisterUserRejectedAction {
    payload?: {
      errors?: {
        email?: string[];
      };
    };
  }
const AuthUserSLice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.success = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.accessToken = action.payload.token.access;
    state.refreshToken = action.payload.token.refresh;
     
      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action:any ) => {
        if(action.payload){
            state.loading = false;
            state.error = action.payload.errors.email[0];
        }
        else{
            state.loading = false;
            state.error = 'Something went wrong'
        }
    });
  },
});

export default AuthUserSLice.reducer;
export const {addUser} = AuthUserSLice.actions;

// 'http://110.0.2.2:8000/api/user/register/
