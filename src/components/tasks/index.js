import { useReducer } from 'react';
import AddTask from './addTask.js';
import TaskList from './taskList.js';
import tasksReducer from './taskReducer.js';
import './styles.css'
import { useNavigate } from "react-router-dom";
import SideBar from './sidebar.js';
import NavBar from './navbar.js';

export default function TaskApp() {
  const navigate = useNavigate();

  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
      done: false,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  const handleClick = () => {
    navigate('/movies');
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        {SideBar()}
        <div style={{ display: 'grid', gap: '5rem', width: '100%' }}>
          {NavBar()}
          <div className='container' style={{ position: 'relative' }}>
            {/* <h1>TODO list</h1> */}
            <AddTask onAddTask={handleAddTask} />
            <TaskList
              tasks={tasks}
              onChangeTask={handleChangeTask}
              onDeleteTask={handleDeleteTask}
            />
          </div>
        </div>
      </div>
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Task 1', done: true },
  { id: 1, text: 'Task 2', done: false },
  { id: 2, text: 'Task 3', done: false },
];
