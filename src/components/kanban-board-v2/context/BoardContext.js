import React, { createContext, useContext, useReducer } from 'react';
import { BoardReducer } from '../Reducer';

const ColumnContext = createContext();

const initialData = [
  {title: 'TODO', id: 'col1', cards: [{title: 'Task 1', id: 'task1'}, {title: 'Task 2', id: 'task2'}, {title: 'Task 3', id: 'task3'}]},
  {id: 'col2', title: 'In-progress', cards: [{title: 'Task 5', id: 'task5'}, {title: 'Task 6', id: 'task6'}, {title: 'Task 7', id: 'task7'}]},
  {id: 'col3', title: 'done', cards: [{title: 'Task 9', id: 'task9'}, {title: 'Task 10', id: 'task10'}, {title: 'Task 11', id: 'task11'}]},
];

export const BoardProvider = ({ children }) => {
  const [boardColumns, dispatch] = useReducer(BoardReducer, initialData);

  return (
    <ColumnContext.Provider value={{ boardColumns, colDispatch: dispatch }}>
        {children}
    </ColumnContext.Provider>
  );
};

export const useColumnContext = () => useContext(ColumnContext);

