import { Paper } from '@mui/material';
import React from 'react';
import NoteMUI from './Note.style';
import { NoteProps } from './Note.types';

const Note = (props: NoteProps) => {
  const {className} = props;
  
  return (
    <NoteMUI {...props} elevation={0} variant={'outlined'} className={`${className}`}>{props.children}</NoteMUI>
  )
}

export default Note;