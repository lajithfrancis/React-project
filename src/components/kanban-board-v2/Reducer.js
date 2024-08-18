import { arrayMove } from '@dnd-kit/sortable';

export const ACTION_TYPES = {
  DRAG_OVER: 'BOARD_DRAG_OVER',
};

function updateContainerCards(containers, columnIndex, newCards) {
  const newContainers = [...containers];
  newContainers[columnIndex] = {
    ...newContainers[columnIndex],
    cards: newCards,
  };
  return newContainers;
}

export function BoardReducer(state, action) {
  console.log('action hit', action.type);
  switch (action.type) {
    case ACTION_TYPES.DRAG_OVER: {
      const { active, over } = action;
      const prev = state;

      if (!over || !over.data.current?.sortable.containerId) return prev;

      const activeContainerId = active.data.current.sortable.containerId;
      const overContainerId = over.data.current.sortable.containerId;

      const activeColumnIndex = prev.findIndex(
        (column) => column.id === activeContainerId
      );
      const overColumnIndex = prev.findIndex(
        (column) => column.id === overContainerId
      );

      if (activeColumnIndex === -1 || overColumnIndex === -1) return prev;

      const activeItems = [...prev[activeColumnIndex].cards];
      const overItems = [...(prev[overColumnIndex].cards || [])];

      const activeIndex = activeItems.findIndex(
        (card) => card.id === active.id
      );
      const overIndex = overItems.findIndex((card) => card.id === over.id);

      // If moving within the same container
      if (activeContainerId === overContainerId) {
        if (activeIndex !== overIndex) {
          const newItems = arrayMove(activeItems, activeIndex, overIndex);
          return updateContainerCards(prev, activeColumnIndex, newItems);
        }
        return prev;
      } else {
        // If moving across containers
        const [movedCard] = activeItems.splice(activeIndex, 1);

        if (overIndex === -1) {
          overItems.push(movedCard);
        } else {
          overItems.splice(overIndex, 0, movedCard);
        }

        let newContainers = updateContainerCards(
          prev,
          activeColumnIndex,
          activeItems
        );
        newContainers = updateContainerCards(
          newContainers,
          overColumnIndex,
          overItems
        );

        return newContainers;
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
