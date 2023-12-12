import { useState } from 'react';
import './styles.css'
import { Button, Checkbox, TextField } from '@mui/material';
export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <div class='list-group'>
      <>
        {tasks.map((task) =>
          taskRow({ task, onChange: onChangeTask, onDelete: onDeleteTask })
        )}
      </>
      <label class='list-group-item d-flex gap-3'>
        <input
          class='form-check-input flex-shrink-0'
          type='checkbox'
          value=''
          // checked=''
          style={{ fontSize: '1.375em' }}
        />
        <span class='pt-1 form-checked-content'>
          <strong>Finish sales report</strong>
          <small class='d-block text-body-secondary'>
            <svg class='bi me-1' width='1em' height='1em'>
              {/* <use xlink:href='#calendar-event'></use> */}
            </svg>
            1:00–2:00pm
          </small>
        </span>
      </label>
      <label class='list-group-item d-flex gap-3'>
        <input
          class='form-check-input flex-shrink-0'
          type='checkbox'
          value=''
          style={{ fontSize: '1.375em' }}
        />
        <span class='pt-1 form-checked-content'>
          <strong>Weekly All Hands</strong>
          <small class='d-block text-body-secondary'>
            <svg class='bi me-1' width='1em' height='1em'>
              {/* <use xlink:href='#calendar-event'></use> */}
            </svg>
            2:00–2:30pm
          </small>
        </span>
      </label>
      <label class='list-group-item d-flex gap-3'>
        <input
          class='form-check-input flex-shrink-0'
          type='checkbox'
          value=''
          style={{ fontSize: '1.375em' }}
        />
        <span class='pt-1 form-checked-content'>
          <strong>Out of office</strong>
          <small class='d-block text-body-secondary'>Tomorrow</small>
        </span>
      </label>
      <label class='list-group-item d-flex gap-3 bg-body-tertiary'>
        <input
          class='form-check-input form-check-input-placeholder bg-body-tertiary flex-shrink-0 pe-none'
          disabled=''
          type='checkbox'
          value=''
          style={{ fontSize: '1.375em' }}
        />
        <span class='pt-1 form-checked-content'>
          <span contenteditable='true' class='w-100'>
            Add new task...
          </span>
          <small class='d-block text-body-secondary'>
            <svg class='bi me-1' width='1em' height='1em'>
              {/* <use xlink:href='#list-check'></use> */}
            </svg>
            Choose list...
          </small>
        </span>
      </label>
    </div>
    // <ul id='task-u-list' style={{ listStyle: 'none', padding: '0' }}>
    //   {tasks.map((task) => (
    //     <li key={task.id} style={{ padding: '1rem 0' }}>
    //       <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
    //     </li>
    //   ))}
    // </ul>
  );
}

function taskRow({ task, onChange, onDelete }) {
  // const [isEditing, setIsEditing] = useState(false);
  console.log('task: ', task);
  function handleOnClick(e) {
    onChange({ ...task, done: !task.done });
  }
  return (
    <>
      <label class='list-group-item d-flex gap-3'>
        <input
          class='form-check-input flex-shrink-0'
          type='checkbox'
          value=''
          checked={task.done}
          style={{ fontSize: '1.375em' }}
          onClick={handleOnClick}
        />
        <span class='pt-1 form-checked-content'>
          <strong>{task.text}</strong>
          <small class='d-block text-body-secondary'>
            <svg class='bi me-1' width='1em' height='1em'>
              {/* <use xlink:href='#calendar-event'></use> */}
            </svg>
            1:00–2:00pm
          </small>
        </span>
      </label>
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
