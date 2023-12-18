import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function AddTask({onAddTask}) {
  const [text, setText] = useState('');
  return (
    <>
      <div
        id='add-task'
        style={{
          display: 'flex',
          gap: '1rem',
          paddingBottom: '1rem',
          width: '100%',
        }}
      >
        <TextField
          id='standard-basic'
          label='New Task'
          variant='filled'
          placeholder='Type here...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          variant='contained'
          onClick={() => {
            setText('');
            onAddTask(text);
          }}
        >
          Add
        </Button>
      </div>
    </>
  );
}
