import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import { useDroppable } from "@dnd-kit/core";

export default function DroppableContainer({ id, items }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  return (
    <div ref={setNodeRef}>
      <h2>{id}</h2>
      <SortableContext
        id={id}
        items={items}
        strategy={verticalListSortingStrategy}
      >
        <div>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} card={item} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
}
