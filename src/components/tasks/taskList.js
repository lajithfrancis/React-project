import { useState } from 'react';
import './styles.css'
import { Button, Checkbox, TextField } from '@mui/material';
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div className='list-group'>
      <>
        {tasks.map((task) => (
          <div
            key={task.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ced4da',
              borderRadius: '5px',
            }}
          >
            {taskRow({ task, onChange: onChangeTask, onDelete: onDeleteTask })}
          </div>
        ))}
      </>
    </div>
  );
}

function taskRow({ task, onChange, onDelete }) {
  // const [isEditing, setIsEditing] = useState(false);
  function handleOnClick(e, task) {
    onChange({ ...task, done: !task.done });
  }
  return (
    <>
      <label
        className='list-group-item d-flex gap-3'
        style={{ width: '100%', borderColor: 'white' }}
      >
        <input
          className='form-check-input flex-shrink-0'
          type='checkbox'
          value=''
          defaultChecked={task.done}
          style={{ fontSize: '1.375em' }}
          onChange={(e) => handleOnClick(e, task)}
        />
        <span className='pt-1 form-checked-content'>
          <strong>{task.text}</strong>
          <small className='d-block text-body-secondary'>
            <svg className='bi me-1' width='1em' height='1em'>
              <use href='#calendar-event'></use>
            </svg>
            1:00–2:00pm
          </small>
        </span>
      </label>
      <div style={{ margin: '1rem' }}>
        <Button
          variant='contained'
          color='error'
          // onClick={() => setIsEditing(false)}
        >
          Delete
        </Button>
      </div>
    </>
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
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Checkbox
        type='checkbox'
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {taskContent}
      <Button
        variant='contained'
        color='error'
        onClick={() => onDelete(task.id)}
      >
        Delete
      </Button>
    </div>
  );
}
