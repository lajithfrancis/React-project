import { useState } from 'react';
import './styles.css'
import { Button, Checkbox, TextField } from '@mui/material';
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <TextField id="outlined-basic" label="Task" variant="outlined" placeholder='Edit task'
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button variant="contained" color="success"
          onClick={() => setIsEditing(false)}
        >
          Save
        </Button>
      </>
    );
  } else {
    taskContent = (
      <>
        <TextField id="outlined-read-only-input" label="" variant="outlined" placeholder='Edit task'
          InputProps={{
            readOnly: true,
          }}
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <Button variant="contained" color="secondary"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </Button>
      </>
    );
  }
  return (
    <label>
      <Checkbox
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <Button variant="contained" color="error"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </label>
  );
}
