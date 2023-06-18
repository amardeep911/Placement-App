import {createAsyncThunk} from '@reduxjs/toolkit';

import axios from 'axios';

import {registerDatatypes} from '../../utils/types';
import {loginDatatypes} from '../../utils/types';

export const registerUser = createAsyncThunk(
  'authUser/registerUser',
  async (data: registerDatatypes, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/user/register/',
        data,
      );
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        console.log(error);
        return rejectWithValue(error.response?.data);
      } else {
        console.log('Error', error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'authUser/loginUser',
  async (data: loginDatatypes, {rejectWithValue}) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/user/login/',
        data,
      );
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        console.log(error);
        return rejectWithValue(error.response?.data);
      } else {
        console.log('Error', error.message);
      }
      return rejectWithValue(error.message);
    }
  },
);
