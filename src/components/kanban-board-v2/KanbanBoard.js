import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates
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
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250, // Require a 250ms hold before dragging starts
        tolerance: 5, // Allow slight movement (5px) before canceling the drag
      },
    })
  );

  const handleDragStart = (event) => {
    const { active } = event;
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
    if (event.active.data?.current?.type === 'column') {
      return;
    }
    if (!over || active.id === over.id) return;
    const activeContainerId = active.data.current.sortable.containerId;
    const overContainerId = over.data.current.sortable.containerId;
    if (activeContainerId === overContainerId) return;
    console.log({
      activeContainerId,
      overContainerId,
      activeId: active.id,
      overId: over.id
    })
    colDispatch({
      type: ACTION_TYPES.DRAG_OVER,
      active,
      over,
    });
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log('handleDragEnd', {
      active: active.data.current.sortable.containerId,
      over: over.data.current.sortable.containerId,
    });
    console.log('current index', active.data.current.sortable.index);
    console.log('over index', over.data.current.sortable.index);
    if (event.active.data?.current?.type === 'column') {
      colDispatch({
        type: ACTION_TYPES.MOVE_COLUMN,
        payload: {
          from: active.data.current.sortable.index,
          to: over.data.current.sortable.index,
        },
      });
      return;
    }
    setActiveId(null);
    setActiveCard(null);
    setActiveContainer(null);
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCenter}
      >
        <SortableContext
          items={containers}
          strategy={horizontalListSortingStrategy}
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
              <Column
                key={container.id}
                container={container}
                activeContainer={activeContainer}
              />
            ))}
          </div>
        </SortableContext>
        <DragOverlay>
          {activeId && (
            <SortableItem id={activeId} card={activeCard} isOverlay />
          )}
        </DragOverlay>
      </DndContext>
    </>
  );
};



export default KanbanBoard;
