import React from 'react';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { openEditCardDialog } from '../../actions';

import './Card.scss';

const Card = ({ card }) => {
  const dispatch = useDispatch();

  return (
      <div className="card" onClick={() => dispatch(openEditCardDialog(card.id))}>
        <div className="card__title">
          {card.title}
        </div>

        <div className="card__description">
          {card.description}
        </div>
      </div>
  );
};

export default Card;

Card.propTypes = {
  card: propTypes.object.isRequired,
};
