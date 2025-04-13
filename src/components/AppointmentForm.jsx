import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addAppointment } from '../redux/appointmentSlice';

const AppointmentForm = () => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    doctor: Yup.string().required('Doctor\'s name is required'),
    reason: Yup.string().optional(),
    contact: Yup.string().optional(),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addAppointment(values));
    resetForm(); // this clears the form fields after submission
  };

  return (
    <div>
      <h2>Add New Appointment</h2>
      <Formik
        initialValues={{
          date: '',
          time: '',
          doctor: '',
          reason: '',
          contact: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <div>
              <label>Date:</label>
              <Field name="date">
                {({ field }) => (
                  <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    onChange={(date) => setFieldValue('date', date)} // Use Formik's setFieldValue to update the field value
                  />
                )}
              </Field>
              <ErrorMessage name="date" component="div" />
            </div>

            <div>
              <label>Time:</label>
              <Field name="time" type="time" />
              <ErrorMessage name="time" component="div" />
            </div>

            <div>
              <label>Doctor:</label>
              <Field name="doctor" type="text" />
              <ErrorMessage name="doctor" component="div" />
            </div>

            <div>
              <label>Reason (Optional):</label>
              <Field name="reason" type="text" />
            </div>

            <div>
              <label>Contact (Optional):</label>
              <Field name="contact" type="text" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AppointmentForm;
