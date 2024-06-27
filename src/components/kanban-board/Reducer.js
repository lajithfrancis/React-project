import { arrayMove } from '@dnd-kit/sortable';
import { v4 as uuidv4 } from 'uuid';

export function CardReducer(cards, action) {
  switch (action.type) {
    case 'add_card': {
      return [
        ...cards,
        {
          id: uuidv4(),
          title: action.payload.title,
          description: action.payload.description,
          columnId: action.payload.columnId,
        },
      ];
    }
    case 'swap': {
      console.table({ ...action.payload });
      const cardId = action.cardId;
      let { activeColumnId, desColumnId, cardDropIndex } = action.payload;
      let currentIndex;
      const updatedCards = cards.map((card) => {
        if (card.id === cardId) {
          currentIndex = card.index;
          return {
            ...card,
            columnId: desColumnId,
          };
        }
        return card;
      });
      const destinationColumnCards = updatedCards.filter(
        (card) => card.columnId === desColumnId
      );
      const currentIndexOfCard = destinationColumnCards.findIndex(
        (card) => card.id === cardId
      );
      if (activeColumnId === desColumnId) {
        // Adjacent dropping is avoided
        if (
          cardDropIndex === currentIndex ||
          cardDropIndex === currentIndex + 1
        ) {
          return updatedCards;
        } else {
          // When destination is same column; and drop index is larger than the selected card then we need to avoid considering the selected card index
          if (cardDropIndex > currentIndexOfCard) {
            cardDropIndex -= 1;
          }
        }
      }
      const newCard = destinationColumnCards[currentIndexOfCard];
      destinationColumnCards.splice(currentIndexOfCard, 1);
      destinationColumnCards.splice(cardDropIndex, 0, newCard);
      const updatedDestinationColumnCards = destinationColumnCards.map(
        (card, index) => {
          return {
            ...card,
            index,
          };
        }
      );
      return [
        ...updatedCards.filter((card) => card.columnId !== desColumnId),
        ...updatedDestinationColumnCards,
      ];
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function ColumnReducer(columns, action) {
  switch (action.type) {
    case 'move_column': {
      return arrayMove(
        columns,
        action.payload.activeIndex,
        action.payload.overIndex
      );
    }

    case 'edit_column': {
      return columns.map((column) => {
        if (column.id === action.payload.id) {
          return {
            ...column,
            title: action.payload.title,
          };
        }
        return column;
      });
    }

    case 'add_column': {
      return [
        ...columns,
        {
          id: uuidv4(),
          title: action.title,
          cards: [],
        },
      ];
    }
    case 'delete_column': {
      return columns.filter((col) => col.id !== action.id);
    }

    default:
      break;
  }
}

const boardData = [
  {
    id: '1',
    title: 'To Do',
    cards: [
      {
        id: '1',
        title: 'Task 1',
        description: 'Description for Task 1',
        columnId: '1',
      },
      {
        id: '2',
        title: 'Task 2',
        description: 'Description for Task 2',
        columnId: '1',
      },
    ],
  },
  {
    id: '2',
    title: 'In Progress',
    cards: [
      {
        id: '3',
        title: 'Task 3',
        description: 'Description for Task 3',
        columnId: '2',
      },
    ],
  },
  {
    id: '3',
    title: 'Done',
    cards: [
      {
        id: '4',
        title: 'Task 4',
        description: 'Description for Task 4',
        columnId: '3',
      },
    ],
  },
];
