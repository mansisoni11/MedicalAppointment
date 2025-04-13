import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  appointments: JSON.parse(localStorage.getItem('appointments')) || [],
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: {
      reducer: (state, action) => {
        // Ensure the date is stored as a string (ISO format)
        const appointment = { ...action.payload, date: action.payload.date.toISOString() };
        state.appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(state.appointments));
      },
      prepare: (appointment) => ({
        payload: {
          ...appointment,
          id: nanoid(),
          date: appointment.date, // assuming date is a Date object
        },
      }),
    },
    deleteAppointment: (state, action) => {
      state.appointments = state.appointments.filter(
        (appt) => appt.id !== action.payload
      );
      localStorage.setItem('appointments', JSON.stringify(state.appointments));
    },
  },
});

export const { addAppointment, deleteAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
