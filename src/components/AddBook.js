import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddBookSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  price: Yup.number().required('Price is required').positive().integer(),
});

const AddBook = () => {
  return (
    <Formik
      initialValues={{ title: '', author: '', price: '' }}
      validationSchema={AddBookSchema}
      onSubmit={async (values) => {
        await axios.post('http://localhost:5000/api/books', values);
        alert('Book added successfully!');
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label>Title</label>
            <Field name="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
          </div>

          <div>
            <label>Author</label>
            <Field name="author" />
            {errors.author && touched.author ? <div>{errors.author}</div> : null}
          </div>

          <div>
            <label>Price</label>
            <Field name="price" type="number" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}
          </div>

          <button type="submit">Add Book</button>
        </Form>
      )}
    </Formik>
  );
};

export default AddBook;