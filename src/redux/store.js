import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filters/slice';
import { contactFormReducer } from './contacts/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: contactFormReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
