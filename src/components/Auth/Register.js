import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/slices/authSlice';
import { Formik } from 'formik';



const Register = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
          confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(register(values));
          setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <Field name="confirmPassword" type="password" />
          <ErrorMessage name="confirmPassword" component="div" />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
