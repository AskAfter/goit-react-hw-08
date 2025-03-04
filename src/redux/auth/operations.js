import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://connections-api.goit.global/',
});

const setAuthToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthToken = () => {
  api.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post('users/signup', body);
      setAuthToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await api.post('users/login', body);
    setAuthToken(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
  try {
    await api.post('users/logout');
    clearAuthToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const savedToken = thunkAPI.getState().auth.token;
      if (savedToken === null) {
        return thunkAPI.rejectWithValue('can not find token');
      }
      setAuthToken(savedToken);
      const { data } = await api.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
