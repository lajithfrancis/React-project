import React, { useState } from 'react';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { closestCenter, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

import SortableItem from './components/SortableItem';
import DroppableContainer from './components/DroppableContainer';
import { Paper } from '@mui/material';
import { useColumnContext } from './context/BoardContext';
import { ACTION_TYPES } from './Reducer';

const initialData = [
  {title: 'TODO', id: 'col1', cards: [{title: 'Task 1', id: 'task1'}, {title: 'Task 2', id: 'task2'}, {title: 'Task 3', id: 'task3'}]},
  {id: 'col2', title: 'In-progress', cards: [{title: 'Task 5', id: 'task5'}, {title: 'Task 6', id: 'task6'}, {title: 'Task 7', id: 'task7'}]},
  {id: 'col3', title: 'done', cards: [{title: 'Task 9', id: 'task9'}, {title: 'Task 10', id: 'task10'}, {title: 'Task 11', id: 'task11'}]},
];

const KanbanBoard = () => {
  // const [containers, setContainers] = useState(initialData);
  const { boardColumns: containers, colDispatch } = useColumnContext();
  const [activeId, setActiveId] = useState(null);
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
    setActiveContainer(
      containers.find(
        (container) => container.id === active.data.current.sortable.containerId
      )
    );
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    colDispatch({
      type: ACTION_TYPES.DRAG_OVER,
      active,
      over,
    })
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
            display: "flex",
            gap: "20px",
            overflow: "visible",
            position: "relative",
          }}
        >
          {containers.map((container) => (
            <Paper
              key={container.id}
              style={{
                width: "300px",
                height: "80vh",
                overflow: "auto",
                borderRadius: "1rem",
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
          {activeId ? <SortableItem id={activeId} isOverlay /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};

export default KanbanBoard;
