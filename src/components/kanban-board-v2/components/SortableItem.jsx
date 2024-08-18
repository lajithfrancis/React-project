import { useSortable } from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import Card from './Card';

export default function SortableItem({ id, isOverlay, card }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, card });
  const style = {
    // padding: '1rem',
    transform: CSS.Transform.toString(transform),
    transition,
    margin: '1rem',
    backgroundColor: isOverlay ? '#e0e0e0' : '#fff',
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card id={id} card={card} />
    </div>
  );
}
