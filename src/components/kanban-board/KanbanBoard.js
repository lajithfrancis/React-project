import React, { useMemo, useState } from 'react';
import { Button, Grid } from '@mui/material';
import Column from './Column';
import { SortableContext } from '@dnd-kit/sortable';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useCardContext, useColumnContext } from './context/BoardContext';

const KanbanBoard = () => {
  const { boardColumns, colDispatch } = useColumnContext();
  const { cardDispatch } = useCardContext();
  const [activeColumn, setActiveColumn] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const columnIds = useMemo(
    () => boardColumns.map((col) => col.id),
    [boardColumns]
  );

  const handleDrop = (id, activeColumnId, desColumnId, cardDropIndex) => {
    cardDispatch({
      type: 'swap',
      cardId: id,
      payload: {
        activeColumnId,
        desColumnId,
        cardDropIndex,
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

  const handleAddBtnOnClick = () => {
    colDispatch({
      type: 'add_column',
      title: 'New Column',
    });
  };
  return (
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Grid container spacing={2} style={{ padding: '16px' }} wrap='nowrap'>
        <SortableContext items={columnIds}>
          {boardColumns.map((column, index) => (
            <Grid item key={index}>
              <Column
                column={column}
                handleDrop={handleDrop}
                setIsDragged={setIsDragged}
                isDragged={isDragged}
              />
            </Grid>
          ))}
          <Button onClick={handleAddBtnOnClick}>Add</Button>
        </SortableContext>
      </Grid>
      <DragOverlay>
        {activeColumn && <Column column={activeColumn} />}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;
