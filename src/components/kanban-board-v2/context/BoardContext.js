import React, { createContext, useContext, useReducer } from 'react';
import { BoardReducer } from '../Reducer';

const ColumnContext = createContext();

const initialData = [
  {
    title: 'TODO',
    id: 'col1',
    cards: [
      { title: 'Task 1', id: '8c9d3c69-6499-4a6f-bd57-839f9c9f8a30' },
      { title: 'Task 2', id: 'c2a7bcdc-47d4-4f79-8700-9e21be1a44f8' },
      { title: 'Task 3', id: 'e6de59f8-61b4-4c16-9f3a-01fd0803f76e' },
      { title: 'Task 4', id: 'b4c477cb-5c15-431a-957a-789e32a4b6ae' },
      { title: 'Task 5', id: '4b3b2d3d-62bb-48f4-a834-429089d97a4b' },
      { title: 'Task 6', id: '06bb4bcd-5582-4f7b-9a1b-0b249cd6b8b2' },
      { title: 'Task 7', id: '273a3b3c-47a8-49cf-abe6-d6db4b18b1e4' },
      { title: 'Task 8', id: 'b12254c2-3b4f-4c19-a8a2-0a184d3f68e8' },
      { title: 'Task 9', id: 'f4f8e6c9-d0bb-420d-95a8-b20a94228e23' },
      { title: 'Task 10', id: 'ec4d2c3b-5a12-4dfc-bad3-cd6d4cbb49a8' },
    ],
  },
  {
    id: 'col2',
    title: 'In-progress',
    cards: [
      { title: 'Task 11', id: 'ec5a6d2e-74a4-4148-91f4-20873f9570ed' },
      { title: 'Task 12', id: 'd7cf97f7-eac5-4cfc-90b1-9957b3e0c2ab' },
      { title: 'Task 13', id: 'd0e9b617-bb8f-4038-a1e1-87c26d0d1e74' },
      { title: 'Task 14', id: 'cb9f68b5-8c3c-4ebd-8d0a-c86f9b2a0a49' },
      { title: 'Task 15', id: 'eaf7d57e-fb1a-4b59-8996-2c02ab08618d' },
      { title: 'Task 16', id: 'dabe6e4f-796b-4d8d-8e7e-5c8b9b9e8b0e' },
      { title: 'Task 17', id: '8397b1a3-43c4-46d1-9c7c-0d4a5f6d634e' },
      { title: 'Task 18', id: 'ed8c7d4d-1ba5-4632-8b0e-9a6b4c8d6b6e' },
      { title: 'Task 19', id: 'f5d2c4a2-8a6f-4f4d-9f92-9e8f8f1e6b29' },
      { title: 'Task 20', id: 'c95b2e3d-7b2f-49f3-b1b3-8b9b7d2c6e0c' },
    ],
  },
  {
    id: 'col3',
    title: 'Done',
    cards: [
      { title: 'Task 21', id: 'a0a1a6a7-1f7e-4b1b-9f9e-6d8d3b1a6b5d' },
      { title: 'Task 22', id: 'cb9d5c7a-3f5a-4b5e-8f7e-9e7c7b1a6f8d' },
      { title: 'Task 23', id: 'ea7d3b9a-1c7f-49f3-9b8e-4c5a7f1d6e9b' },
      { title: 'Task 24', id: 'c5a8e7f6-5b6d-4c6a-8d7b-9f7c6e1b7f5d' },
      { title: 'Task 25', id: 'f6a8b3e4-7c9d-4f7a-9b8f-1e9b3c5d7e8a' },
      { title: 'Task 26', id: 'd7c5b1a8-6f3e-4f8d-9c7a-5b8e7c1d9e6b' },
      { title: 'Task 27', id: 'e8a7c3b6-1f9e-4d8b-9f3e-6b7a9c8d5e7a' },
      { title: 'Task 28', id: 'd9e7b4c6-2c5a-4e9b-8f7d-1b8e6c9a7f5c' },
      { title: 'Task 29', id: 'f1b3d4e6-8c7d-4a9e-9f7c-3b5a8e7d9b6a' },
      { title: 'Task 30', id: 'c9b5a7e8-4d7a-4f6b-9e3d-7a8f9c6d5e1b' },
    ],
  },
  {
    id: 'col4',
    title: 'Review',
    cards: [
      { title: 'Task 31', id: 'b2d9f7a8-7e1a-4c3e-8f9b-1d8a7b5c6e9f' },
      { title: 'Task 32', id: 'c8e1f9b7-9d5a-4a7e-8b3f-2c9e7d1f6a5b' },
      { title: 'Task 33', id: 'd6f3b2c9-5e4a-4b8e-9f7d-6a1c7e8b9d3a' },
      { title: 'Task 34', id: 'e7a5c6d9-3b4f-4e9d-8f7a-1c5b9d8e6b3f' },
      { title: 'Task 35', id: 'f8b7e6c3-4d1a-4c9f-8e7b-2d3e9f5c7a1b' },
      { title: 'Task 36', id: 'c6a8b7e9-1f3d-4d8b-9e7c-3f5a9c6e7b8a' },
      { title: 'Task 37', id: 'd7c9e5b8-2f1a-4b3d-8e7f-9a6d1c8b7f3a' },
      { title: 'Task 38', id: 'e8a7f9b6-3d2c-4b8e-9f7a-5c1d9e6b7f8a' },
      { title: 'Task 39', id: 'f9c8b7a6-4d3e-4f9b-8e7c-1a6d3f5e7b9a' },
      { title: 'Task 40', id: 'c1e9b7f6-2a4f-4c8b-9f7d-3d5e7c8a1b9a' },
    ],
  },
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

