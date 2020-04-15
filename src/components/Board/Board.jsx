import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import Column from '../Column/Column.jsx';
import { openCreateCardDialog } from '../../actions';

import './Board.scss';

const Board = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards) || [];
  const toDoCards = [];
  const inProgressCards = [];
  const doneCards = [];

  cards.forEach((card) => {
    if (card.column === 'toDo') {
      toDoCards.push(card);
    } else if (card.column === 'inProgress') {
      inProgressCards.push(card);
    } else if (card.column === 'Done') {
      doneCards.push(card);
    }
  });

  const createNewCardButton = (
    <Button
      variant="outlined"
      onClick={() => dispatch(openCreateCardDialog())}
    >
      New
    </Button>);

  return (
    <div className="board">
      <Column title="To Do" createButton={createNewCardButton} cards={toDoCards}></Column>

      <div className="board__divider"/>

      <Column title="In Progress" cards={inProgressCards}></Column>

      <div className="board__divider"/>

      <Column title="Done" cards={doneCards}></Column>
    </div>
  );
};

export default Board;
