import React from 'react';
import { useDispatch, connect } from 'react-redux';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { createCard } from '../../actions';

import Card from '../Card/Card.jsx';

import './Column.scss';

const Column = ({ cards = [], title, create }) => {
  const dispatch = useDispatch();

  return (
    <div className="column">
      <div className="column__title">
        {title}
      </div>

      {
        create && <Button variant="outlined" onClick={() => dispatch(createCard('test title', 'test descr'))}>New</Button>
      }

      <div className={create ? 'column__body' : 'column__body column__body_type_no-button-top'}>
        { cards.map((card, index) => <Card
            title={card.title}
            description={card.description}
            key={index}
          />) }
      </div>
    </div>
  );
};

export default Column;

Column.propTypes = {
  cards: propTypes.array,
  title: propTypes.string.isRequired,
  create: propTypes.bool,
};
