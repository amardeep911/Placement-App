import {createAsyncThunk} from '@reduxjs/toolkit';
import {ReduxModel} from '../../utils/types';
import axios from 'axios';


export const registerUser = createAsyncThunk(
  'authUser/registerUser',
  async (
    data: {email: string; name: string; password: string; password2: string},
    {rejectWithValue},
  ) => {
    try {
    const response =  await axios
        .post('http://10.0.2.2:8000/api/user/register/',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        return response.data;

    } catch (error) {
       
      return rejectWithValue(error.response.data);
    }
  },
);
// export const registerUser = createAsyncThunk(
//     'authUser/registerUser',
//     async (data, {rejectWithValue} ) => {
//       const response = await fetch('http://127.0.0.1:8000/api/user/register/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body:     JSON.stringify(data),
//       });
//       try {
//         const result = await response.json();
//         console.log(result)
//         return result;
//       } catch (error) {
//           console.log('err')
//           return rejectWithValue(error);
//       }
//     },
//   );
