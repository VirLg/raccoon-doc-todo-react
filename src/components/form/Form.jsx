import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const TodoForm = ({ createTodo }) => (
  <div>
    <h1>Add Task:</h1>
    <Formik
      initialValues={{ name: '', task: '', date: '' }}
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
          <Field type="date" name="date" className="outline" />
          <ErrorMessage name="date" component="div" />
          <button
            type="submit"
            disabled={isSubmitting}
            className="ml-4  border-2 p-2 m-1 rounded-md"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);
export default TodoForm;
