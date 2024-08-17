import React, { useState } from 'react';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { closestCenter, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

import SortableItem from './components/SortableItem';
import DroppableContainer from './components/DroppableContainer';

const initialData = {
  'TODO': ['Task 1', 'Task 2', 'Task 3'],
  'InProgress': ['Task 4', 'Task 5'],
  'Done': ['Task 6', 'Task 7'],
};

const KanbanBoard = () => {
  const [containers, setContainers] = useState(initialData);
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
    setActiveContainer(Object.keys(containers).find((key) =>
      containers[key].includes(active.id)
    ));
  };

  const findContainer = (id) => {
    return Object.keys(containers).find((key) => containers[key].includes(id));
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id);

    if (!activeContainer || !overContainer || activeContainer === overContainer) return;

    setContainers((prev) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];

      const activeIndex = activeItems.indexOf(active.id);
      const overIndex = overItems.indexOf(over.id);

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].slice(0, activeIndex),
          ...prev[activeContainer].slice(activeIndex + 1),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, overIndex),
          active.id,
          ...prev[overContainer].slice(overIndex),
        ],
      };
    });
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
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
          {Object.keys(containers).map((containerId) => (
            <DroppableContainer
              key={containerId}
              id={containerId}
              items={containers[containerId]}
              isDragging={activeContainer === containerId}
            />
          ))}
        </div>
        <DragOverlay>
          {activeId ? <SortableItem id={activeId} isOverlay /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const { id: activeId } = active;
    const { id: overId } = over;

    if (activeId === overId) return;

    const activeContainer = Object.keys(containers).find((key) =>
      containers[key].includes(activeId)
    );
    const overContainer = Object.keys(containers).find((key) =>
      containers[key].includes(overId)
    );

    if (activeContainer === overContainer) {
      const newItems = arrayMove(
        containers[activeContainer],
        containers[activeContainer].indexOf(activeId),
        containers[activeContainer].indexOf(overId)
      );

      setContainers({
        ...containers,
        [activeContainer]: newItems,
      });
    } else {
      const activeItems = containers[activeContainer].filter(
        (item) => item !== activeId
      );
      const overItems = [...containers[overContainer], activeId];

      setContainers({
        ...containers,
        [activeContainer]: activeItems,
        [overContainer]: overItems,
      });
    }
  };

};

export default KanbanBoard;
