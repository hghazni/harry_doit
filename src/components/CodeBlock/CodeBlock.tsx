import CodeBlockMUI from "./CodeBlock.styles";
import { CodeBlockProps } from "./CodeBlock.types";

const CodeBlock = (props: CodeBlockProps) => {

  return (
    <CodeBlockMUI {...props} elevation={0}>{props.children}</CodeBlockMUI>
  )
}

export default CodeBlock;