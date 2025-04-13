// src/utils/localStorageUtils.js

export const saveAppointmentsToLocalStorage = (appointments) => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  };
  
  export const getAppointmentsFromLocalStorage = () => {
    const storedAppointments = localStorage.getItem('appointments');
    return storedAppointments ? JSON.parse(storedAppointments) : [];
  };
  