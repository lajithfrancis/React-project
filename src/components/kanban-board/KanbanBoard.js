// src/components/KanbanBoard.js
import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { Grid } from '@mui/material';
import Column from './Column';
import { CardReducer, ColumnReducer } from './Reducer';
import { SortableContext } from '@dnd-kit/sortable';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import {
  BoardProvider,
  useCardContext,
  useColumnContext,
} from './context/BoardContext';

const KanbanBoard = () => {
  const { boardColumns, colDispatch } = useColumnContext();
  const { boardCards, cardDispatch } = useCardContext();
  const [activeColumn, setActiveColumn] = useState(null);
  const columnIds = useMemo(
    () => boardColumns.map((col) => col.id),
    [boardColumns]
  );

  const getCards = (columnId) => {
    return boardCards.filter((card) => card.columnId === columnId);
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
                  boardCards={boardCards}
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
