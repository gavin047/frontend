import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SignIn = () => {
  return (
      <Formik initialValues={{ email: '', password: '' }}
              validationSchema={SignInSchema}
              onSubmit={async (values) => {
                  const response = await axios.post('http://localhost:5000/api/login', values);
                  localStorage.setItem('token', response.data.access_token); // Store token for future requests.
                  alert('Logged in successfully!');
              }}>
          {({ errors, touched }) => (
              <Form>
                  <div>
                      <label>Email</label>
                      <Field name="email" type="email" />
                      {errors.email && touched.email ? <div>{errors.email}</div> : null}
                  </div>

                  <div>
                      <label>Password</label>
                      <Field name="password" type="password" />
                      {errors.password && touched.password ? <div>{errors.password}</div> : null}
                  </div>

                  <button type="submit">Sign In</button>
              </Form>
          )}
      </Formik>
  );
};

export default SignIn;