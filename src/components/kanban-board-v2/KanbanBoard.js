import React, { useState } from 'react';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { closestCenter, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

import SortableItem from './components/SortableItem';
import DroppableContainer from './components/DroppableContainer';

const initialData = [
  {title: 'TODO', id: 'col1', cards: [{title: 'Task 1', id: 'task1'}, {title: 'Task 2', id: 'task2'}, {title: 'Task 3', id: 'task3'}]},
  {id: 'col2', title: 'In-progress', cards: [{title: 'Task 5', id: 'task5'}, {title: 'Task 6', id: 'task6'}, {title: 'Task 7', id: 'task7'}]},
  {id: 'col3', title: 'done', cards: [{title: 'Task 9', id: 'task9'}, {title: 'Task 10', id: 'task10'}, {title: 'Task 11', id: 'task11'}]},
];

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
    console.log('handleDragStart', {active})
    setActiveId(active.id);
    setActiveContainer(containers.find((container) =>
      (container.id === active.data.current.sortable.containerId)
    ));
  };

  const findContainer = (id) => {
    return containers.find((container) => container.id === id);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;
    const activeContainer = findContainer(active.data.current.sortable.containerId);
    const overContainer = findContainer(over.data.current.sortable.containerId);

    if (!activeContainer || !overContainer || activeContainer.id === overContainer.id) return;

    setContainers((prev) => {
      const activeColumnIndex = prev.findIndex(column => column.id === activeContainer.id);
      const overColumnIndex = prev.findIndex(column => column.id === overContainer.id);

      // Retrieve the current cards array for both the active and over containers
      const activeItems = prev[activeColumnIndex].cards ? [...prev[activeColumnIndex].cards] : [];
      const overItems = prev[overColumnIndex].cards ? [...prev[overColumnIndex].cards] : [];
    
      // Find the index of the card being moved and the index where it will be dropped
      const activeIndex = activeItems.findIndex(item => item.id === active.id);
      const overIndex = overItems.findIndex(item => item.id === over.id);
    
      // Remove the card from the active container
      const [movedCard] = activeItems.splice(activeIndex, 1);
    
      // Insert the card into the new container's cards array
      if (activeColumnIndex === overColumnIndex) {
        // If moving within the same container, just reorder the cards
        activeItems.splice(overIndex, 0, movedCard);
      } else {
        // If moving to a different container, add the card to the over container
        overItems.splice(overIndex, 0, movedCard);
      }
      console.log({
        activeItems,
        overItems
      })
      // Update the state with the new cards array for both containers
      const updatedColumns = [...prev];
      updatedColumns[activeColumnIndex] = {
        ...updatedColumns[activeColumnIndex],
        cards: activeItems,
      };
      updatedColumns[overColumnIndex] = {
        ...updatedColumns[overColumnIndex],
        cards: overItems,
      };
    
      return updatedColumns;
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
            display: "flex",
            gap: "20px",
            overflow: "visible",
            position: "relative",
          }}
        >
          {containers.map((container) => (
            <DroppableContainer
              key={container.id}
              id={container.id}
              items={container.cards}
              isDragging={activeContainer?.id === container.id}
            />
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
