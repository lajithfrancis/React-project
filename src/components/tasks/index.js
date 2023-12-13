import { useEffect, useReducer, useState } from 'react';
import AddTask from './addTask.js';
import TaskList from './taskList.js';
import tasksReducer from './taskReducer.js';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import SideBar from './sidebar.js';
import NavBar from './navbar.js';

export default function TaskApp() {
  const navigate = useNavigate();

  const [tasksData, dispatch] = useReducer(tasksReducer, initialTasks);
  const [tasks, setTasks] = useState(tasksData);

  useEffect(() => {
    setTasks((prev) => {
      return tasksData;
    });
  }, [tasksData]);
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

  const filterTasks = (tab) => {
    if (tab === 'All') {
      setTasks(tasksData);
    } else if (tab === 'Completed') {
      setTasks(tasksData.filter((task) => task.done));
    } else if (tab === 'Pending') {
      setTasks(tasksData.filter((task) => !task.done));
    }
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        {SideBar({ filterTasks })}
        <div
          style={{
            display: 'grid',
            gap: '5rem',
            width: '100%',
            height: '50px',
          }}
        >
          {NavBar()}
          <div
            style={{
              position: 'relative',
              display: 'grid',
              width: '75%',
              left: '1rem',
            }}
          >
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

let nextId = 5;
const initialTasks = [
  { id: 0, text: 'Finish sales report', done: true },
  { id: 1, text: 'Weekly All Hands', done: false },
  { id: 2, text: 'Out of office', done: false },
  { id: 3, text: 'Enjoy movie', done: false },
  { id: 4, text: 'Take a nap', done: true },
];
