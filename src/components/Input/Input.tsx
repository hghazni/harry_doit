import { InputProps } from './Input.types';
import { TextField } from '@mui/material';
import scss from './Input.module.scss';

const Input = (props: InputProps) => {
const { className, label } = props;

  return (
    <TextField {...props}
      autoComplete={"false"}
      fullWidth 
      label={label} 
      className={`${scss.input} ${className}`} />
  )
}

export default Input;