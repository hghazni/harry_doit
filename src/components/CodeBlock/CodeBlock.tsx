import { Paper } from "@mui/material";
import { CodeBlockProps } from "./CodeBlock.types";
import scss from './CodeBlock.module.scss';

const CodeBlock = (props: CodeBlockProps) => {

  return (
    <Paper {...props} className={scss.codeBlock} elevation={0}><pre>{props.children}</pre></Paper>
  )
}

export default CodeBlock;