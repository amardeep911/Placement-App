import {createSlice} from '@reduxjs/toolkit';
import {ReduxModel} from '../../utils/types';
import {registerUser} from '../actions/action';
import {loginUser} from '../actions/action';
export const initialState: ReduxModel = {
  loading: false,
  error: '',
  success: false,
  accessToken: '',
  refreshToken: '',
};


const AuthUserSLice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.success = false;
    },
  },
  extraReducers: builder => {
    // Login User
    builder.addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.error = '';
        });
    builder.addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload.token+'from here')
        state.loading = false;
        state.success = true;
        state.accessToken = action.payload.token.access;
        state.refreshToken = action.payload.token.refresh;
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
export const {addUser} = AuthUserSLice.actions;

// 'http://110.0.2.2:8000/api/user/register/
