import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ConfirmationModal from './ConfirmationModal';
import { deleteAppointment } from '../redux/appointmentSlice';

const AppointmentTable = () => {
  const appointments = useSelector((state) => state.appointments.appointments);
  const dispatch = useDispatch();
  const [selectedAppointment, setSelectedAppointment] = React.useState(null);

  const handleDelete = (id) => {
    setSelectedAppointment(id);
  };

  const confirmDelete = () => {
    dispatch(deleteAppointment(selectedAppointment));
    setSelectedAppointment(null);
  };

  return (
    <div>
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Doctor</th>
            <th>Reason</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt.id}>
              <td>{new Date(appt.date).toLocaleString()}</td> {/* Format Date */}
              <td>{appt.time}</td>
              <td>{appt.doctor}</td>
              <td>{appt.reason || 'N/A'}</td>
              <td>{appt.contact || 'N/A'}</td>
              <td>
                <button onClick={() => handleDelete(appt.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedAppointment && (
        <ConfirmationModal
          onConfirm={confirmDelete}
          onCancel={() => setSelectedAppointment(null)}
        />
      )}
    </div>
  );
};

export default AppointmentTable;
