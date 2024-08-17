import React, { useState } from 'react';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { closestCenter, DndContext, DragOverlay, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';

import SortableItem from './components/SortableItem';
import DroppableContainer from './components/DroppableContainer';
import { Paper } from '@mui/material';

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
    console.log("handleDragOver", { active, over });

    if (!over) return;

    const activeContainerId = active.data.current.sortable.containerId;
    const overContainerId = over.data.current?.sortable.containerId || over.id;

    if (activeContainerId === overContainerId) {
      // Moving within the same container
      setContainers((prev) => {
        const containerIndex = prev.findIndex(
          (column) => column.id === activeContainerId
        );
        const items = [...prev[containerIndex].cards];

        const activeIndex = items.findIndex((card) => card.id === active.id);
        const overIndex = items.findIndex((card) => card.id === over.id);

        if (activeIndex !== overIndex) {
          // Move item within the same container
          const newItems = arrayMove(items, activeIndex, overIndex);

          const newContainers = [...prev];
          newContainers[containerIndex] = {
            ...newContainers[containerIndex],
            cards: newItems,
          };

          return newContainers;
        }

        return prev;
      });
    } else {
      // Moving to a different container
      setContainers((prev) => {
        const activeColumnIndex = prev.findIndex(
          (column) => column.id === activeContainerId
        );
        const overColumnIndex = prev.findIndex(
          (column) => column.id === overContainerId
        );

        const activeItems = [...prev[activeColumnIndex].cards];
        const overItems = [...(prev[overColumnIndex].cards || [])];

        const activeIndex = activeItems.findIndex(
          (card) => card.id === active.id
        );

        const [movedCard] = activeItems.splice(activeIndex, 1);

        const overIndex = overItems.findIndex((card) => card.id === over.id);

        // Insert the card into the new position in the over container
        if (overIndex === -1) {
          // If overIndex is -1, it means the container is empty, so just push the card
          overItems.push(movedCard);
        } else {
          overItems.splice(overIndex, 0, movedCard);
        }

        const newContainers = [...prev];
        newContainers[activeColumnIndex] = {
          ...newContainers[activeColumnIndex],
          cards: activeItems,
        };
        newContainers[overColumnIndex] = {
          ...newContainers[overColumnIndex],
          cards: overItems,
        };

        return newContainers;
      });
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    console.log('handleDragEnd', {active, over})
    if (!over) return;
  
    const activeContainerId = active.data.current.sortable.containerId;
    const overContainerId = over.data.current.sortable.containerId;
  
    // Check if the drag and drop are happening within the same container
    if (activeContainerId === overContainerId) {
      // Find the index of the active item and the over item
      const containerIndex = containers.findIndex(column => column.id === activeContainerId);
      const items = containers[containerIndex].cards ? [...containers[containerIndex].cards] : [];
  
      const activeIndex = items.findIndex(card => card.id === active.id);
      const overIndex = items.findIndex(card => card.id === over.id);
  
      // If the indices are the same, no need to move anything
      if (activeIndex !== overIndex) {
        const newItems = arrayMove(items, activeIndex, overIndex);
  
        // Update the state with the reordered items
        setContainers(prevContainers => {
          const newContainers = [...prevContainers];
          newContainers[containerIndex] = {
            ...newContainers[containerIndex],
            cards: newItems,
          };
          return newContainers;
        });
      }
    }
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
                // padding: '16px',
                width: "300px",
                height: "80vh",
                overflow: "auto",
                borderRadius: "1rem",
                // backgroundColor: '#26292C', // TODO: Column bg color
                // color: 'lightgrey', // TODO: Column font color
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
