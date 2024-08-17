import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DroppableContainer from './components/DroppableContainer';
import SortableItem from './components/SortableItem';
import { useColumnContext } from './context/BoardContext';
import { ACTION_TYPES } from './Reducer';

const KanbanBoard = () => {
  const { boardColumns: containers, colDispatch } = useColumnContext();
  const [activeId, setActiveId] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [activeContainer, setActiveContainer] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event) => {
    const { active } = event;
    setActiveId(active.id);
    setActiveCard();
    setActiveContainer(
      containers.find(
        (container) => container.id === active.data.current.sortable.containerId
      )
    );
  };

  useEffect(() => {
    if (activeId && activeContainer) {
      const cardDetails = activeContainer.cards.find(
        (card) => card.id === activeId
      );
      setActiveCard(cardDetails);
    }
  }, [activeContainer, activeId]);

  const handleDragOver = (event) => {
    const { active, over } = event;
    colDispatch({
      type: ACTION_TYPES.DRAG_OVER,
      active,
      over,
    });
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        collisionDetection={closestCenter}
      >
        <div
          style={{
            display: 'flex',
            gap: '20px',
            overflow: 'visible',
            position: 'relative',
          }}
        >
          {containers.map((container) => (
            <Paper
              key={container.id}
              style={{
                width: '300px',
                height: '80vh',
                overflow: 'auto',
                borderRadius: '1rem',
              }}
            >
              <DroppableContainer
                key={container.id}
                id={container.id}
                items={container.cards}
                isDragging={activeContainer?.id === container.id}
              />
            </Paper>
          ))}
        </div>
        <DragOverlay>
          {activeId ? (
            <SortableItem id={activeId} card={activeCard} isOverlay />
          ) : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};

export default KanbanBoard;
