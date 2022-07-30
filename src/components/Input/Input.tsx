import React from 'react';
import { InputProps } from './Input.types';
import InputMUI from './Input.style';

const Input = (props: InputProps) => {
const { className, label } = props;

  return (
    <InputMUI {...props} fullWidth label={label} className={`${className}`} />
  )
}

export default Input;