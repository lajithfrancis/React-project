import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import { Typography } from "@mui/material";

export default function SortableItem({ id, isOverlay, card }) {
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
  };
  
  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card id={id} card={card} />
    </div>
  );
}

function Card({ id, card }) {
  return (
    <>
      <Typography variant="h6">{card?.title}</Typography>
      <Typography variant="body2">{id}</Typography>
    </>
  );
}