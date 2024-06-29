import React, { useMemo, useState } from 'react';
import { Button, Grid, Fade } from '@mui/material';
import Column from './column/Column';
import { SortableContext } from '@dnd-kit/sortable';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { useCardContext, useColumnContext } from './context/BoardContext';
import CardDetailsPage from './card/CardDetails';

const KanbanBoard = () => {
  const { boardColumns, colDispatch } = useColumnContext();
  const { cardDispatch } = useCardContext();
  const [activeColumn, setActiveColumn] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isDragged, setIsDragged] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isBoardVisible, setIsBoardVisible] = useState(true);
  const [draggedElementHeight, setDraggedElementHeight] = useState();
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

  const handleCardOnClick = (card) => {
    setIsBoardVisible(false);
    setTimeout(() => {
      setIsModelOpen(true);
    }, 100);
    setSelectedCard(card);
  };

  const handleOnClickCloseButton = () => {
    setIsModelOpen(false);
    setIsBoardVisible(true);
  };

  return (
    <>
      {selectedCard && isModelOpen && (
        <CardDetailsPage
          card={selectedCard}
          handleOnClick={handleOnClickCloseButton}
        />
      )}
      <Fade in={isBoardVisible} timeout={100}>
        <div>
          <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Grid
              container
              spacing={2}
              style={{ paddingTop: '16px' }}
              wrap='nowrap'
              overflow={'auto'}
            >
              <SortableContext items={columnIds}>
                {boardColumns.map((column, index) => (
                  <Grid item key={index}>
                    <Column
                      column={column}
                      handleDrop={handleDrop}
                      setIsDragged={setIsDragged}
                      isDragged={isDragged}
                      handleCardOnClick={handleCardOnClick}
                      setDraggedElementHeight={setDraggedElementHeight}
                      draggedElementHeight={draggedElementHeight}
                    />
                  </Grid>
                ))}
                <Button
                  style={{ marginTop: '16px' }}
                  onClick={handleAddBtnOnClick}
                >
                  Add
                </Button>
              </SortableContext>
            </Grid>
            <DragOverlay>
              {activeColumn && <Column column={activeColumn} />}
            </DragOverlay>
          </DndContext>
        </div>
      </Fade>
    </>
  );
};

export default KanbanBoard;
