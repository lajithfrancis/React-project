import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function AddTask({onAddTask}) {
  const [text, setText] = useState('');
  return (
    <>
      <TextField id="standard-basic" label="Add" variant="standard"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="outlined"
      onClick={() => {
        setText('');
        onAddTask(text);
      }}
      >Add</Button>
    </>
  );
}
