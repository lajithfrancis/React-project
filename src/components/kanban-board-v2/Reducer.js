import { arrayMove } from "@dnd-kit/sortable";
import { v4 as uuidv4 } from "uuid";

export const ACTION_TYPES = {
  DRAG_OVER: "BOARD_DRAG_OVER",
  DRAG_END: "BOARD_DRAG_END",
};

export function BoardReducer(state, action) {
  console.log("action hit", action.type);
  switch (action.type) {
    case ACTION_TYPES.DRAG_OVER: {
      const { active, over } = action;
      const prev = state;
      if (!over) return prev;
      if (!over.data.current?.sortable.containerId) {
        return prev;
      }
      const activeContainerId = active.data.current.sortable.containerId;
      const overContainerId = over.data.current?.sortable.containerId;

      if (activeContainerId === overContainerId) {
        // Moving within the same container
        // setContainers((prev) => {
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
      } else {
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
      }
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
