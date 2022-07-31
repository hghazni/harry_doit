import { Typography } from "@mui/material"
import { HeadingProps } from "./Heading.types";
import scss from './Heading.module.scss';

const Heading = (props: HeadingProps) => {
  const { className, children } = props;

  return (
    <Typography {...props} 
      className={`${scss.heading} ${className}`}>
        {children}
    </Typography>
  )
}

export default Heading;