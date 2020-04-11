import React from 'react';

import './Card.scss';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__title">
        {props.title}
      </div>

      <div className="card__description">
        {props.description}
      </div>
    </div>
  );
}
