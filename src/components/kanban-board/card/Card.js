// src/components/Card.js
import React, { useState } from 'react';
import {
  Card as MuiCard,
  CardContent,
  Typography,
  styled,
  CardActions,
  Tooltip,
  IconButton,
  Collapse,
  Menu,
  MenuItem,
  Avatar,
  AvatarGroup,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Flag as FlagIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import DeleteDialogBox from '../column/DeleteDialogBox';
import { useCardContext } from '../context/BoardContext';

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
  setIsDragged,
  handleCardOnClick,
  setDraggedElementHeight,
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
        // borderRadius: '.5rem',
        opacity: isDragging ? 0.5 : 1,
        // transition: 'opacity .3s cubic-bezier(0.4, 0, 1, 1)',
        // boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
        // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
        // boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
      }}
      draggable
      onDragStart={(e) => {
        setIsDragged(true);
        setIsDragging(true);
        setHover(false);
        setDraggedElementHeight(e.target.offsetHeight);
        console.log('e.target.offsetHeight: ', e.target.offsetHeight);
        console.log('drag started');
        e.dataTransfer.setData('activeCard', JSON.stringify(card));
      }}
      onDragEnd={() => {
        setIsDragged(false);
        setIsDragging(false);
        setDraggedElementHeight(null);
        console.log('drag stopped');
      }}
      // onClick={handleOnClick}
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
          <Collapse in={hover} timeout='auto' unmountOnExit>
            <CardActions
              sx={{
                position: 'absolute',
                transform: 'translate(-80%, -150%)',
              }}
            >
              <Tooltip title='Edit'>
                <IconButton onClick={handleOnClick} aria-label='edit'>
                  <EditIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Flag'>
                <IconButton onClick={handleClick} aria-label='flag'>
                  <FlagIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title='Delete'>
                <IconButton
                  onClick={() => setOpenConfirm(true)}
                  aria-label='delete'
                >
                  <DeleteIcon />
                </IconButton>
                <DeleteDialogBox
                  openConfirm={openConfirm}
                  setOpenConfirm={setOpenConfirm}
                  handleOnClick={handleOnDelete}
                />
              </Tooltip>
            </CardActions>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleFlagOption('Inappropriate')}>
                Inappropriate
              </MenuItem>
              <MenuItem onClick={() => handleFlagOption('Spam')}>Spam</MenuItem>
              <MenuItem onClick={() => handleFlagOption('Other')}>
                Other
              </MenuItem>
            </Menu>
          </Collapse>
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
          <Avatar alt='Remy Sharp' src='/static/images/cards/assignee1.jpg' />
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
