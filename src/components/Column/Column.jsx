import React from 'react';
import propTypes from 'prop-types';
import Card from '../Card/Card.jsx';

import './Column.scss';

const Column = ({ createButton, cards = [], title }) => (
    <div className="column">
      <div className="column__title">
        {title}
      </div>

      { createButton }

      <div className={createButton ? 'column__body column__body_type_with-button' : 'column__body'}>
        { cards.map((card) => <Card
            card={card}
            key={card.id}
          />) }
      </div>
    </div>
);

export default Column;

Column.propTypes = {
  createButton: propTypes.node,
  cards: propTypes.array,
  title: propTypes.string.isRequired,
};
