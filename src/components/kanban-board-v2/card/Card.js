// src/components/Card.js
import React, { useState } from 'react';
import {
  Card as MuiCard,
  CardContent,
  Typography,
  styled,
  Avatar,
  AvatarGroup,
} from '@mui/material';
import { useCardContext } from '../context/BoardContext';
const homepage = 'https://lajithfrancis.github.io/React-project';

const StyledGrid = styled(MuiCard)(({ theme }) => ({
  borderRadius: '1rem',
  backgroundColor: theme.palette.text.custom,
  ':hover': {
    // backgroundColor: theme.palette.primary.light,
    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    color: theme.palette.text.custom,
  },
  transition: 'opacity .3s cubic-bezier(0.4, 0, 1, 1)',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
}));

const StyledAvatar = styled(AvatarGroup)(({ theme }) => ({
  '.MuiAvatar-root': {
    width: '30px',
    height: '30px',
  },
}));

const Card = ({
  card,
  handleCardOnClick,
}) => {
  const [isDragging, setIsDragging] = useState();
  const [hover, setHover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openConfirm, setOpenConfirm] = useState();
  const { cardDispatch } = useCardContext();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOnClick = () => {
    handleCardOnClick(card);
  };

  const handleFlagOption = (flagType) => {
    // onFlag(id, flagType);
    console.log('handle flag option: ', flagType);
    handleClose();
  };

  const handleOnDelete = () => {
    cardDispatch({
      type: 'delete_card',
      id: card.id,
    });
    console.log('handleOnDelete: ');
  };

  return (
    <StyledGrid
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        }}
      draggable
      onDragStart={(e) => {
      }}
      onDragEnd={() => {
      }}
    >
      <CardContent
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '7rem',
          maxHeight: '10rem',
          transition: 'all .3s',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'auto',
            height: '50px',
          }}
        >
          <Typography variant='h6'>{card.title}</Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            overflow: 'auto',
          }}
        >
          <Typography variant='body2' color='' style={{ overflow: 'auto' }}>
            {card.description}
          </Typography>

          <Typography variant='body2' color='GrayText'>
            {5}
          </Typography>
        </div>
        <StyledAvatar max={4}>
          <Avatar
            alt='Lajith'
            src={`${homepage}/static/images/cards/assignee1.jpg`}
          />
          <Avatar alt='Remy Sharp' src='/static/images/cards/image.jpg' />
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
        </StyledAvatar>
      </CardContent>
    </StyledGrid>
  );
};

export default Card;
