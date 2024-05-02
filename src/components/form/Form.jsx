import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const TodoForm = ({ createTodo }) => (
  <div>
    <h1>Add Task:</h1>
    <Formik
      initialValues={{ name: '', task: '' }}
      validate={values => {
        const errors = {};
        if (!values.name) errors.name = 'Name is required';
        if (!values.task) errors.task = 'Task is required';
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        createTodo(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" className="outline" />
          <ErrorMessage name="name" component="div" />
          <Field type="text" name="task" className="outline" />
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
