import {
  OPEN_CREATE_CARD_DIALOG,
  OPEN_EDIT_CARD_DIALOG,
  CLOSE_CARD_DIALOG,
  CREATE_CARD,
  EDIT_CARD,
  REMOVE_CARD,
} from './actions';

const initialState = {
  isCardDialogOpen: false,
  cardDialogEditMode: false,
  cards: [],
};

function kanbanApp(state = initialState, action) {
  switch (action.type) {
    case OPEN_CREATE_CARD_DIALOG:
      return { ...state, isCardDialogOpen: true, cardDialogEditMode: false };
    case OPEN_EDIT_CARD_DIALOG:
      return { ...state, isCardDialogOpen: true, cardDialogEditMode: true };
    case CLOSE_CARD_DIALOG:
      return { ...state, isCardDialogOpen: false };
    case CREATE_CARD:
      return {
        ...state,
        cards: [
          {
            title: action.title,
            description: action.description,
          },
          ...state.cards,
        ],
      };
    case EDIT_CARD:
      return {
        ...state,
        cards: state.cards.map((card, index) => {
          if (index === action.index) {
            return action.newCard;
          }
          return card;
        }),
      };
    // TODO: уточнить по поводу иммутабельности
    case REMOVE_CARD:
      return {
        ...state,
        cards: state.cards.slice(0, action.index).concat(state.cards.slice(action.index + 1)),
      };
    default:
      return state;
  }
}

export default kanbanApp;
