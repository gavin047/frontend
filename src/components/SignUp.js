import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUpSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SignUp = () => {
  return (
      <Formik initialValues={{ username: '', email: '', password: '' }}
              validationSchema={SignUpSchema}
              onSubmit={async (values) => {
                  await axios.post('http://localhost:5000/api/register', values);
                  alert('User registered successfully!');
              }}>
          {({ errors, touched }) => (
              <Form>
                  <div>
                      <label>Username</label>
                      <Field name="username" />
                      {errors.username && touched.username ? <div>{errors.username}</div> : null}
                  </div>

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

                  <button type="submit">Sign Up</button>
              </Form>
          )}
      </Formik>
  );
};

export default SignUp;