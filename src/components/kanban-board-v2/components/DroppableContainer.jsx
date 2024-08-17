import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import { useDroppable } from "@dnd-kit/core";
import { useColumnContext } from "../context/BoardContext";

export default function DroppableContainer({ id }) {
  const { boardColumns: containers } = useColumnContext();
  const findContainer = (id) => {
    return containers.find((container) => container.id === id);
  };
  const container = findContainer(id)
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  return (
    <div ref={setNodeRef}>
      <h2>{id}</h2>
      <SortableContext
        id={id}
        items={container.cards}
        strategy={verticalListSortingStrategy}
      >
        <div>
          {container.cards.map((item) => (
            <SortableItem key={item.id} id={item.id} card={item} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
