import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import React, { useEffect, useState } from 'react';
import Column from './components/Column';
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
    console.log('handleDragStart', { event });
    if (event.active.data?.current?.type === 'column') {
      return;
    }
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
    console.log('handleDragOver', { event });
    if (event.active.data?.current?.type === 'column') {
      return;
    }
    colDispatch({
      type: ACTION_TYPES.DRAG_OVER,
      active,
      over,
    });
    setActiveCard(null);
    setActiveContainer(null);
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
          <SortableContext items={containers}>
            {containers.map((container) => (
              <Column container={container} activeContainer={activeContainer} />
            ))}
          </SortableContext>
        </div>
        {/* <DragOverlay>
          {activeId && (
            <SortableItem id={activeId} card={activeCard} isOverlay />
          )}
        </DragOverlay> */}
      </DndContext>
    </>
  );
};



export default KanbanBoard;
