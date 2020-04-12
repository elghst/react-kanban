import React from 'react';
import propTypes from 'prop-types';

import './Card.scss';

import CardDialog from '../CardDialog/CardDialog.jsx';

const Card = ({ title, description }) => {
  let isDialogOpen = false;
  const openCardDialog = () => {
    isDialogOpen = true;
    console.log('Card dialog open');
  };

  const closeCardDialog = () => {
    isDialogOpen = false;
  };

  return (
    <React.Fragment>
      <div className="card" onClick={openCardDialog}>
        <div className="card__title">
          {title}
        </div>

        <div className="card__description">
          {description}
        </div>
      </div>
      <CardDialog open={isDialogOpen} onClose={closeCardDialog}/>
    </React.Fragment>
  );
};

export default Card;

Card.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
