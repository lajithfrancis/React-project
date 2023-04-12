import { useReducer } from 'react';
import AddTask from './addTask.js';
import TaskList from './taskList.js';
import tasksReducer from './taskReducer.js';
import './styles.css'

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

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
      task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>TODO list</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Task 1', done: true},
  {id: 1, text: 'Task 2', done: false},
  {id: 2, text: 'Task 3', done: false},
];
