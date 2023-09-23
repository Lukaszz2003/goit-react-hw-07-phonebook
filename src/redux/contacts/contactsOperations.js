import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  removeContactsApi,
} from '../../utils/contactsApi';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.massage);
    }
  }
);

export const addContacts = createAsyncThunk(
  'addContacts',
  async (obj, thunkApi) => {
    try {
      const newContact = await addContactsApi(obj);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'removeContacts',
  async (id, thunkApi) => {
    try {
      const contacts = await removeContactsApi(id);
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
