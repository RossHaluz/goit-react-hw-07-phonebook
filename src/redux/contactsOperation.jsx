import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63f9d9aebeec322c57e8b069.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const responce = await axios.get('/contacts');

      return responce.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (number, { rejectWithValue }) => {
    try {
      const responce = await axios.post('/contacts', number);

      return responce.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);

      return responce.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
