import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../auth/operations';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async ({ signal }, thunkAPI) => {
    try {
      const response = await api.get('/contacts', { signal });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, thunkAPI) => {
    try {
      const response = await api.post('/contacts', body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
