import { Paper } from '@mui/material';
import { NoteProps } from './Note.types';
import scss from './Note.module.scss';

const Note = (props: NoteProps) => {
  const {className} = props;
  
  return (
    <Paper {...props} 
      square 
      variant={'outlined'} 
      className={`${scss.note} ${className}`}
      sx={{
        backgroundColor: '#FAFAFA'
      }}
      >
      {props.children}
    </Paper>
  )
}

export default Note;