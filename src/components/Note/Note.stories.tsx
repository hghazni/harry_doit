import Note from './Note';
import { NoteProps } from './Note.types';

export default {
    children: '',
    title: 'Components/Note',
    component: Note,
  };
  
  const Template = (args: NoteProps) => (
    <Note {...args} />
  );
  
  const props = {
    defaultProps: () => ({
      className: '',
      children: 
      <>
        <b>Need Help?</b>
        <br />
        <p>Duis lacus erat, tincidunt a quam eu, feugiat feugiat felis. Duis hendrerit a eros at pulvinar. Quisque a congue enim. Proin at egestas eros. Duis venenatis commodo tempus.</p>
      </>
    }),
  };

export const NoteStory: any = Template.bind({});
const defaultProps = props.defaultProps();
NoteStory.storyName = 'Note';
NoteStory.args = {
  ...defaultProps,
};
