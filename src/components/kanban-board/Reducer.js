export default function CardReducer(columns, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...columns,
        {
          title: action.title,
          description: action.description,
          columnId: action.columnId,
        },
      ];
    }
    case 'swap': {
      const allCards = columns.reduce((acc, column) => {
        const cards = column.cards.map((card) => {
          return { ...card, columnId: column.id };
        });
        return [...acc, ...cards];
      }, []);
      const foundCard = allCards.find((card) => {
        return card.id === action.payload.id;
      });
      if (foundCard) {
        const newColumns = columns.map((column) => {
          if (column.id === action.payload.desColumnId) {
            column.cards.push({
              ...foundCard,
              columnId: action.payload.desColumnId,
            });
          }
          if (column.id == foundCard.columnId) {
            const currentIndex = column.cards.findIndex(
              (card) => card.id === foundCard.id
            );
            column.cards.splice(currentIndex, 1);
            console.log('splice', currentIndex, foundCard);
          }
          return column;
        });
        return [...newColumns];
      }
    }
    case 'deleted': {
      return columns.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
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
