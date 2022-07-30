import { Typography } from "@mui/material"
import { ReactNode } from "react"
import LabelMUI from "./Label.style";
import LabelWrapper from "./Label.style";
import { LabelProps } from "./Label.types";

const Label = (props: LabelProps) => {
  const { className, children } = props;

  return (
    <LabelMUI className={className} {...props}>{children}</LabelMUI>
  )
}

export default Label;