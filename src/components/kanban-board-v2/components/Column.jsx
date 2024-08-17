import { Paper } from '@mui/material';
import DroppableContainer from './DroppableContainer';

export default function Column({ container, activeContainer }) {
  return (
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
        items={container.cards}
        isDragging={activeContainer?.id === container.id}
      />
    </Paper>
  );
}
