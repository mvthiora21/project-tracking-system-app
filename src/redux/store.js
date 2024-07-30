import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import projectReducer from './slices/projectSlice';
import authSlice from './slices/authSlice'; // Adjust path if needed
import projectSlice from './slices/projectSlice'; // Adjust path if needed


export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
  },
});

export default store;
