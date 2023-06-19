import {createSlice} from '@reduxjs/toolkit';
import {ReduxModel} from '../../utils/types';
import {registerUser} from '../actions/action';
import {loginUser} from '../actions/action';

import { saveTokensToStorage } from '../../utils/localStorage';


export const initialState: ReduxModel = {
  loading: false,
  error: '',
  success: false,
  accessToken: '',
  refreshToken: '',
  isAuth: false,
  navLoading: true,
};


const AuthUserSLice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.success = false;
    },
    setTokens: (state, action) => {
        state.accessToken = action.payload.accessToken;
        state.isAuth = true;
        state.navLoading = false;

        }
  },
  extraReducers:async builder => {
    //Set Tokens
    builder.addCase(setTokens, (state, action) => {
        state.accessToken = action.payload.access;
        state.refreshToken = action.payload.refresh;
        state.isAuth = true;
        });
    // Login User
    builder.addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.error = '';
        });
    builder.addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload.token+'from here')
        state.loading = false;
        state.success = true;
        state.isAuth = true;
        state.accessToken = action.payload.token.access;
        state.refreshToken = action.payload.token.refresh;
        saveTokensToStorage(action.payload.token.access, action.payload.token.refresh)
        });
    builder.addCase(loginUser.rejected, (state, action: any) => {
        if (action.payload) {
        state.loading = false;
        state.error = action.payload.msg;
        } else {
        state.loading = false;
        state.error = 'Something went wrong';
        }
        });

    // Register User
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;

      state.success = true;
    });
    builder.addCase(registerUser.rejected, (state, action: any) => {
      if (action.payload) {
        state.loading = false;
        state.error = action.payload.errors.email[0];
      } else {
        state.loading = false;
        state.error = 'Something went wrong';
      }
    });

  },
});

export default AuthUserSLice.reducer;
export const {addUser,setTokens} = AuthUserSLice.actions;

// 'http://110.0.2.2:8000/api/user/register/
