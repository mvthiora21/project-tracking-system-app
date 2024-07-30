import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { Formik } from 'formik';



const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(login(values));
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

          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
