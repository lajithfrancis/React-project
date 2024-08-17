import { SortableContext } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

export default function DroppableContainer({ id, items }) {
  return (
    <SortableContext id={id} items={items}>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f0f0",
          width: "200px",
          overflow: "visible", // Ensure the overflow is visible
          position: "relative", // Relative position helps with positioning the DragOverlay
        }}
      >
        <h2>{id}</h2>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id} />
        ))}
      </div>
    </SortableContext>
  );
}
