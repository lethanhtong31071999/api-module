import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  label: '',
  disabled: false,
};

function InputField(props) {
  const { name, form, label, disabled } = props;
  const inputField = <input type="text" />;
  return (
    <Controller
      name={name}
      control={form['control']}
      as={inputField} //Kieu Input
      label={label}
      disabled={disabled}
    />
  );
}

export default InputField;
