import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const TodoForm = () => (
  <div>
    <h1>Add Task : </h1>
    <Formik
      initialValues={{ name: '', task: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) errors.name = 'Required';
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values', values);
        console.log('setSubmitting', setSubmitting);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="name" name="name" className="outline" />
          <ErrorMessage name="name" component="div" />
          <Field type="task" name="task" className="outline" />
          <ErrorMessage name="task" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
export default TodoForm;
