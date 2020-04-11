import React from 'react';
import Column from '../Column/Column.jsx';

import './Board.scss';

export default function Board() {
  const toDoCards = [
    {
      title: 'testcard2',
      description: 'test description',
    },
    {
      title: 'test card3',
      description: 'test description',
    },
    {
      title: 'test card4',
      description: 'test description',
    },
  ];

  const inProgressCards = [
    {
      title: 'test card1',
      description: 'test description',
    },
    {
      title: 'testcard2',
      description: 'test description',
    },
    {
      title: 'test card3',
      description: 'test description',
    },
    {
      title: 'test card4',
      description: 'test description',
    },
  ];

  const doneCards = [
    {
      title: 'test card3',
      description: 'test description',
    },
    {
      title: 'test card4',
      description: 'test description',
    },
  ];

  return (
    <div className="board">
      <Column title="To Do" create="true" cards={toDoCards}></Column>

      <div className="board__divider"/>

      <Column title="In Progress" cards={inProgressCards}></Column>

      <div className="board__divider"/>

      <Column title="Done" cards={doneCards}></Column>
    </div>
  );
}
