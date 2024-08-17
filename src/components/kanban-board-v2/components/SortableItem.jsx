import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';

export default function SortableItem({ id, isOverlay }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    padding: "10px",
    margin: "5px",
    backgroundColor: isOverlay ? "#e0e0e0" : "#fff",
    border: "1px solid #ccc",
    position: "relative",
    zIndex: isOverlay ? 10000 : "auto", // Ensure overlay item is above all,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {id}
    </div>
  );
}
