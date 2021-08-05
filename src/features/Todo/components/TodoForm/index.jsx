import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { Controller, useForm } from 'react-hook-form';
import { TextField } from '@material-ui/core';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const form = useForm({
    defaultValues: {
      // name of input: 'default value of input',
      title: '',
      title1: '',
      title2: '',
    },
  });

  const handleOnSubmit = (value) => {
    console.log('Todo Form:', value);
  };

  return (
    // Ko được ghi () => form.handleForm(handleOnSubmit);
    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
      <InputField name="title" label="Todo" form={form} />
      <br />
      <InputField name="title1" label="Todo1" form={form} />
      <br />
      <Controller
        name="title2"
        label="Todo 2"
        control={form['control']}
        as={TextField}
      />
      <br />
      <input type="submit" onClick={form.handleSubmit(handleOnSubmit)} />
    </form>
  );
}

export default TodoForm;
