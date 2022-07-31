import Input from './Input';
import { InputProps } from './Input.types';

export default {
    children: '',
    title: 'Components/Input',
    component: Input,
  };
  
  const Template = (args: InputProps) => (
    <Input {...args} />
  );
  
  const props = {
    defaultProps: () => ({
      className: '',
      ariaDescribedBy: "organizationID-helper-text",
      type: 'number',
      id: "organizationID",
      label: "Your organisation ID",
      onChange: () => console.log('onChange'),
      inputProps: {maxLength: 10}
    }),
  };

export const InputStory: any = Template.bind({});
const defaultProps = props.defaultProps();
InputStory.storyName = 'Input';
InputStory.args = {
  ...defaultProps,
};
