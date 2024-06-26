// src/components/KanbanBoard.js
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { Grid } from '@mui/material';
import Column from './Column';
import { CardReducer, ColumnReducer } from './Reducer';
import { SortableContext } from '@dnd-kit/sortable';
import { DndContext, DragOverlay } from '@dnd-kit/core';

const KanbanBoard = () => {
  const [boardColumns, colDispatch] = useReducer(ColumnReducer, board_columns);
  const [boardsCards, cardDispatch] = useReducer(CardReducer, board_cards);
  const [activeColumn, setActiveColumn] = useState(null);
  const columnIds = useMemo(
    () => boardColumns.map((col) => col.id),
    [boardColumns]
  );

  const getCards = (columnId) => {
    return boardsCards.filter((card) => card.columnId === columnId);
  };

  const handleDrop = (id, desColumnId) => {
    cardDispatch({
      type: 'swap',
      cardId: id,
      payload: {
        columnId: desColumnId,
      },
    });
  };
  const onDragStart = (e) => {
    if (e.active.data.current?.type === 'column') {
      setActiveColumn(e.active.data.current.column);
      return;
    }
  };

  const onDragEnd = (e) => {
    const { active, over } = e;
    if (!over) return;
    if (active.id == over.id) return;
    colDispatch({
      type: 'move_column',
      payload: {
        activeIndex: boardColumns.findIndex((col) => col.id === active.id),
        overIndex: boardColumns.findIndex((col) => col.id === over.id),
      },
    });
    setActiveColumn(null);
  };
  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', overflowX: 'auto', padding: '16px' }}>
        <Grid container spacing={2} style={{ padding: '16px' }} wrap='nowrap'>
          <SortableContext items={columnIds}>
            {boardColumns.map((column, index) => (
              <Grid item key={index}>
                <Column
                  column={column}
                  fetchCards={getCards}
                  boardsCards={boardsCards}
                  handleDrop={handleDrop}
                />
              </Grid>
            ))}
          </SortableContext>
        </Grid>
      </div>
      <DragOverlay>
        {activeColumn && <Column column={activeColumn} fetchCards={getCards} />}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;

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
