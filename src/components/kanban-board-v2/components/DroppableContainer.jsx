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
        <div
          style={{
            padding: "20px",
            // backgroundColor: "#f0f0f0",
            // width: "200px",
            overflow: "visible", // Ensure the overflow is visible
            position: "relative", // Relative position helps with positioning the DragOverlay
          }}
        >
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} card={item} />
          ))}
        </div>
      </SortableContext>
      {/* {items.length === 0 && <p>Drop items here</p>} */}
    </div>
  );
}
