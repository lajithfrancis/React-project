import React, { useEffect, useState } from 'react';
import { Button, Input, Paper, Typography } from '@mui/material';
import Card from '../card/Card';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DropArea from '../drop-area/Drop-Area';
import { useCardContext, useColumnContext } from '../context/BoardContext';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteIcon from '@mui/icons-material/Delete';
import './Column.css';
import ButtonComponent from '../button/Button';
import AddNewCardButton from '../card/AddNewCard';
import DeleteDialogBox from './DeleteDialogBox';

const Column = ({
  column,
  handleDrop,
  setIsDragged,
  isDragged,
  handleCardOnClick,
  draggedElementHeight,
  setDraggedElementHeight,
}) => {
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState('');
  const { boardCards, cardDispatch } = useCardContext();
  const { colDispatch } = useColumnContext();
  const [openConfirm, setOpenConfirm] = useState();
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'column',
      column,
    },
  });

  const getCards = (columnId) => {
    let existingIndexes = [];
    const sortedCards = boardCards
      .filter((card) => card.columnId === columnId)
      .map((card, index) => {
        if (card.index === undefined) {
          card.index = index;
        }
        if (existingIndexes.includes(card.index)) {
          card.index = index + 1;
          existingIndexes.push(index + 1);
        } else {
          existingIndexes.push(index);
        }
        return card;
      })
      .sort((cardA, cardB) => cardA.index - cardB.index);
    return sortedCards;
  };

  useEffect(() => {
    setTitle(column.title);
  }, [column]);

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging && '40%',
  };

  useEffect(() => {
    const cards = getCards(column.id);
    setCards([...cards]);
  }, [column, boardCards]);

  const handleOnClick = () => {
    // open dialog box
    setOpenConfirm(true);
  };

  const handleColumnDelete = () => {
    colDispatch({ type: 'delete_column', id: column.id });
  };

  const handleSaveClick = () => {
    colDispatch({
      type: 'edit_column',
      payload: {
        id: column.id,
        title,
      },
    });
  };

  const handleAddCardOnClick = () => {
    cardDispatch({
      type: 'add_card',
      payload: {
        columnId: column.id,
        title: 'New card',
        description: 'Add description',
      },
    });
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Paper
        style={{
          // padding: '16px',
          width: '300px',
          height: '80vh',
          overflow: 'auto',
          // backgroundColor: '#26292C', // TODO: Column bg color
          // color: 'lightgrey', // TODO: Column font color
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '5px',
              padding: '10px',
              marginBottom: '10px',
              // border: '.1px solid #393D41', // TODO: column title border
            }}
          >
            <div
              {...attributes}
              {...listeners}
              style={{ flex: '0 1 auto', cursor: 'grab' }}
            >
              <DragIndicatorIcon />
            </div>
            <div style={{ flex: '3 1 auto' }}>
              <EditableTypography
                title={title}
                setTitle={setTitle}
                handleSave={handleSaveClick}
              />
            </div>
            <Button
              className='delete-button'
              onClick={handleOnClick}
              style={{ flex: '0 1 auto', minWidth: '30px' }}
            >
              <DeleteIcon />
            </Button>
            <DeleteDialogBox
              openConfirm={openConfirm}
              setOpenConfirm={setOpenConfirm}
              handleOnClick={handleColumnDelete}
            />
            {/* <div style={{ flex: '0 1 auto' }}>
            <ButtonComponent handleOnClick={handleOnClick} />
          </div> */}
          </div>
          <div
            style={{
              flex: '1',
              borderRadius: '.5rem',
              // border: '2px solid #393D41', // TODO: column border color
              padding: '5px',
            }}
          >
            <DropArea
              cardDropIndex={0}
              handleDrop={handleDrop}
              columnId={column.id}
              cards={cards}
              setIsDragged={setIsDragged}
              isDragged={isDragged}
              draggedElementHeight={draggedElementHeight}
            />
            {cards.map((card, index) => (
              <React.Fragment key={index}>
                <Card
                  key={index}
                  card={card}
                  setIsDragged={setIsDragged}
                  handleCardOnClick={handleCardOnClick}
                  setDraggedElementHeight={setDraggedElementHeight}
                />
                <DropArea
                  cardDropIndex={index + 1}
                  handleDrop={handleDrop}
                  columnId={column.id}
                  cards={cards}
                  setIsDragged={setIsDragged}
                  isDragged={isDragged}
                  draggedElementHeight={draggedElementHeight}
                />
              </React.Fragment>
            ))}
            <AddNewCardButton handleOnClick={handleAddCardOnClick} />
          </div>
        </div>
      </Paper>
    </div>
  );
};

function EditableTypography({ title, setTitle, handleSave }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleOnClick = () => {
    handleSave();
    setIsEditing(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleOnClick();
    }
    if (event.key === 'Escape') {
      setIsEditing(false);
    }
  };

  return (
    <div style={{ marginLeft: '10px' }}>
      {isEditing ? (
        <div>
          <Input
            value={title}
            placeholder='Column Name'
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <Button onClick={handleOnClick}>Save</Button>
        </div>
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <Typography variant='h5'>{title || 'Untitled'}</Typography>
        </div>
      )}
    </div>
  );
}

export default Column;
