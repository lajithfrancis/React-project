import { useDroppable } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem';

export default function DroppableContainer({ id, container }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  return (
    <div ref={setNodeRef}>
      <h2>{container.title}</h2>
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
