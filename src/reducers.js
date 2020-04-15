import { v4 as uuid } from 'uuid';
import {
  OPEN_CREATE_CARD_DIALOG,
  OPEN_EDIT_CARD_DIALOG,
  CLOSE_CARD_DIALOG,
  CREATE_CARD,
  EDIT_CARD,
  REMOVE_CARD,
} from './actions';

// Default / Initial state
const initialState = {
  isCardDialogOpen: false,
  editableCard: null,
  cards: [],
};

// Схемка объекта карточки
// card : {
//   id,
//   title,
//   description,
//   column : 'toDo' / 'inProgress' / 'done'
// }

// Reducers
function kanbanApp(state = initialState, action) {
  switch (action.type) {
    case OPEN_CREATE_CARD_DIALOG:
      return { ...state, isCardDialogOpen: true };
    case OPEN_EDIT_CARD_DIALOG:
      return {
        ...state,
        isCardDialogOpen: true,
        editableCard: state.cards.find((card) => card.id === action.id),
      };
    case CLOSE_CARD_DIALOG:
      return { ...state, isCardDialogOpen: false, editableCard: null };
    case CREATE_CARD:
      return {
        ...state,
        cards: [
          {
            id: uuid(),
            title: action.title,
            description: action.description,
            column: 'toDo',
          },
          ...state.cards,
        ],
      };
    // Иммутабельность
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.id) {
            return action.newCard;
          }
          return card;
        }),
      };
    // Иммутабельность
    case REMOVE_CARD:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.id),
      };
    default:
      return state;
  }
}

export default kanbanApp;
