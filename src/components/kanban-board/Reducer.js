import { arrayMove } from '@dnd-kit/sortable';

export function CardReducer(cards, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...cards,
        {
          title: action.title,
          description: action.description,
          columnId: action.columnId,
        },
      ];
    }
    case 'swap': {
      const cardId = action.cardId;
      console.log('card swap reached: ', action);
      return cards.map((card) => {
        if (card.id === cardId) {
          return {
            ...card,
            ...action.payload,
          };
        }
        return card;
      });
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function ColumnReducer(columns, action) {
  switch (action.type) {
    case 'move_column': {
      console.log('column swap: ', action);
      return arrayMove(
        columns,
        action.payload.activeIndex,
        action.payload.overIndex
      );
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
