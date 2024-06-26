import React, { createContext, useContext, useReducer } from 'react';
import { CardReducer, ColumnReducer } from '../Reducer';

const ColumnContext = createContext();
const CardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [boardColumns, dispatch] = useReducer(ColumnReducer, board_columns);
  const [boardCards, cardDispatch] = useReducer(CardReducer, board_cards);

  return (
    <ColumnContext.Provider value={{ boardColumns, colDispatch: dispatch }}>
      <CardContext.Provider value={{ boardCards, cardDispatch }}>
        {children}
      </CardContext.Provider>
    </ColumnContext.Provider>
  );
};

export const useColumnContext = () => useContext(ColumnContext);
export const useCardContext = () => useContext(CardContext);

const board_columns = [
  {
    id: '1',
    title: 'To Do',
  },
  {
    id: '2',
    title: 'In Progress',
  },
  {
    id: '3',
    title: 'Done',
  },
  {
    id: '10',
    title: 'Again To Do',
  },
];

const board_cards = [
  {
    id: 'card-1',
    title: 'Task 1',
    description: 'Description for Task 1',
    columnId: '1',
  },
  {
    id: 'card-2',
    title: 'Task 2',
    description: 'Description for Task 2',
    columnId: '1',
  },
  {
    id: 'card-3',
    title: 'Task 3',
    description: 'Description for Task 3',
    columnId: '2',
  },
  {
    id: 'card-10',
    title: 'Task 4',
    description: 'Description for Task 1',
    columnId: '10',
  },
  {
    id: 'card-20',
    title: 'Task 5',
    description: 'Description for Task 2',
    columnId: '10',
  },
];
