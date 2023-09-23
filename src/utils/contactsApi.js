import axios from 'axios';

axios.defaults.baseURL = 'https://650f1cc154d18aabfe99da2e.mockapi.io';

export const getContactsApi = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContactsApi = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;
};

export const removeContactsApi = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
