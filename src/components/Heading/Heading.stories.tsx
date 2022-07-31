import Heading from './Heading';
import { HeadingProps } from './Heading.types';

export default {
    children: '',
    title: 'Components/Heading',
    component: Heading,
  };
  
  const Template = (args: HeadingProps) => (
    <Heading {...args}>
        Run the following gcloud commands in sequence:
    </Heading>
  );
  
  const props = {
    defaultProps: () => ({
      className: '',
      variant: 'h4'
    }),
  };

export const HeadingStory: any = Template.bind({});
const defaultProps = props.defaultProps();
HeadingStory.storyName = 'Heading';
HeadingStory.args = {
  ...defaultProps,
};
