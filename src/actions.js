// Action types
export const OPEN_CREATE_CARD_DIALOG = 'OPEN_CREATE_CARD_DIALOG';
export const OPEN_EDIT_CARD_DIALOG = 'OPEN_EDIT_CARD_DIALOG';
export const CLOSE_CARD_DIALOG = 'CLOSE_CARD_DIALOG';
export const CREATE_CARD = 'CREATE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

// Action functions
export function openCreateCardDialog() {
  return { type: OPEN_CREATE_CARD_DIALOG };
}

export function openEditCardDialog(index) {
  return { type: OPEN_EDIT_CARD_DIALOG, index };
}

export function closeCardDialog() {
  return { type: CLOSE_CARD_DIALOG };
}

export function createCard(title, description) {
  return { type: CREATE_CARD, title, description };
}

export function editCard(index, newCard) {
  return { type: EDIT_CARD, index, newCard };
}

export function removeCard(index) {
  return { type: REMOVE_CARD, index };
}
