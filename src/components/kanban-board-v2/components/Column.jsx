import { Paper } from '@mui/material';
import DroppableContainer from './DroppableContainer';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Column({ container, activeContainer }) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: container.id,
    data: {
      type: 'column',
      column: container,
    },
  });

  const style = {
    margin: '2rem',
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging && '40%',
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Paper
        key={container.id}
        style={{
          width: '300px',
          height: '80vh',
          overflow: 'auto',
          borderRadius: '1rem',
        }}
      >
        <DroppableContainer
          key={container.id}
          id={container.id}
          container={container}
          isDragging={activeContainer?.id === container.id}
        />
      </Paper>
    </div>
  );
}
