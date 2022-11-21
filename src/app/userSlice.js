/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'src/service/userApi';

export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
      const  user = await userApi.register(payload);
      localStorage.setItem('access_token', JSON.stringify(user.data.data.token));
      localStorage.setItem('user', JSON.stringify(user.data.data.username));
      return user.data.data;
    }
)

export const login = createAsyncThunk(
  'user/login',
  async (payload) => {
    const  user = await userApi.login(payload);
    localStorage.setItem('access_token', JSON.stringify(user.data.data.token));
    localStorage.setItem('user', JSON.stringify(user.data.data));
    return user.data.data;
  }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: JSON.parse(localStorage.getItem('user')) || {},
        settings: {},
    },
    reducers: {
      logout(state) {
        localStorage.removeItem('access_token')
        localStorage.removeItem('user')
        state.current = {}
      }
    },
    extraReducers: {
        [register.fulfilled]: (state, action) => {
          state.current = action.payload
        },
        [login.fulfilled]: (state, action) => {
          state.current = action.payload
        },
      },
});

const { actions, reducer } = userSlice;
export const { logout } = actions
export default reducer

