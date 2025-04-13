// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from './appointmentSlice';  // Default import

const store = configureStore({
  reducer: {
    appointments: appointmentReducer,  // Use the default exported reducer
  },
});

export default store;
