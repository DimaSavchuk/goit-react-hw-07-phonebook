import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlicer';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
