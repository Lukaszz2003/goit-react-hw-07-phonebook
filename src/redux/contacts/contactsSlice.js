import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contactsOperations';

const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },

  extraReducers: {
    [getContacts.pending]: handlePending,
    [getContacts.rejected]: handleRejected,
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },

    [addContacts.pending]: handlePending,
    [addContacts.rejected]: handleRejected,
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items = [...state.items, payload];
    },

    [removeContacts.pending]: handlePending,
    [removeContacts.rejected]: handleRejected,
    [removeContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(item => item.id !== payload.id);
    },
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
