import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core';
import {
  createCard,
  editCard,
  removeCard,
  closeCardDialog,
} from '../../actions';

import './CardDialog.scss';

const CardDialog = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isCardDialogOpen);
  const editableCard = useSelector((state) => state.editableCard);
  const card = editableCard ? { ...editableCard } : {
    title: 'Cool title',
    description: 'A perfect description',
    column: '',
  };
  const columns = [
    { value: 'toDo', text: 'To Do' },
    { value: 'inProgress', text: 'In Progress' },
    { value: 'Done', text: 'Done' },
  ];

  const createNewCard = () => {
    dispatch(createCard(card.title, card.description));
    dispatch(closeCardDialog());
  };

  const changeTitle = (event) => {
    card.title = event.target.value;
  };

  const changeDescription = (event) => {
    card.description = event.target.value;
  };

  const changeColumn = (event) => {
    card.column = event.target.value;
    dispatch(editCard(card.id, card));
    dispatch(closeCardDialog());
  };

  const saveEditableCard = () => {
    dispatch(editCard(card.id, card));
    dispatch(closeCardDialog());
  };

  const removeEditableCard = () => {
    dispatch(removeCard(card.id));
    dispatch(closeCardDialog());
  };

  return (
    <Dialog onClose={() => dispatch(closeCardDialog())} open={isOpen}>
      <DialogContent>
        <TextField
          label="Title"
          defaultValue={card.title}
          variant="outlined"
          onChange={changeTitle}
        />
      </DialogContent>

      <DialogContent>
        <TextField
          label="Description"
          defaultValue={card.description}
          variant="outlined"
          onChange={changeDescription}
        />
      </DialogContent>

      <DialogContent>
        {editableCard && (
          <Select
            variant="outlined"
            value={card.column}
            onChange={changeColumn}
          >
            {columns.map((column, index) => (
            <MenuItem key={index} value={column.value}>{column.text}</MenuItem>))}
          </Select>
        )}
      </DialogContent>


      <DialogActions>
        {!editableCard
        && <Button onClick={createNewCard} classes={{ root: 'button_color_green' }}>
          Create
        </Button>}

        {editableCard && (
          <>
          <Button onClick={removeEditableCard} classes={{ root: 'button_color_red' }}>
            Delete
          </Button>

          <Button onClick={saveEditableCard} classes={{ root: 'button_color_green' }}>
            Save
          </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CardDialog;
