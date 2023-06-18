import {SerializedError, createAsyncThunk} from '@reduxjs/toolkit';
import {ReduxModel} from '../../utils/types';
import axios, {AxiosError} from 'axios';

interface registerDatatypes {
    email: string;
    password: string;
    name: string;
    password2: string;
}
interface MyKnownError  {
    message: string;
}
type myData = {
    token: {
        access: string;
        refresh: string;
    };
    msg: string;
}



export const registerUser = createAsyncThunk(
    'authUser/registerUser',
    async (data: registerDatatypes , { rejectWithValue }) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/user/register/', data);
        return response.data;
      } catch (error: any) {
          if (axios.isAxiosError(error)) {
            console.log(error.response?.data)
            console.log(error)
            return rejectWithValue(error.response?.data);
            
        } else {
          console.log('Error', error.message);
        }
        return rejectWithValue(error.message);
      }
    }
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
