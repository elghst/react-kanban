import React from 'react';
import { Button } from '@material-ui/core';

import Card from '../Card/Card.jsx';

import './Column.scss';

export default function Column(props) {
  const cards = props.cards || [];
  return (
    <div className="column">
      <div className="column__title">
        {props.title}
      </div>

      {
        props.create && <Button>New</Button>
      }

      <div className={props.create ? 'column__body' : 'column__body column__body_type_no-button-top'}>
        { cards.map((card) => <Card
            title={card.title}
            description={card.description}
            key={card.title}
          />) }
      </div>
    </div>
  );
}
