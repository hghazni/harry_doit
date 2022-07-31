import CodeBlock from './CodeBlock';
import { CodeBlockProps } from './CodeBlock.types';

export default {
    children: '',
    title: 'Components/CodeBlock',
    component: CodeBlock,
  };
  
  const Template = (args: CodeBlockProps) => (
    <CodeBlock {...args}>
        Donec at ante sed orci euismod venenatis iaculis at sapien. <span style={{color: "red"}}>12345678</span> Ut id nisl a neque facilisis tempus. Donec et risus dui. Aliquam fringilla luctus velit quis dapibus.
    </CodeBlock>
  );
  
  const props = {
    defaultProps: () => ({
      className: ''
    }),
  };

export const CodeBlockStory: any = Template.bind({});
const defaultProps = props.defaultProps();
CodeBlockStory.storyName = 'CodeBlock';
CodeBlockStory.args = {
  ...defaultProps,
};
