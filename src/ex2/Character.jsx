/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Character = (props) => (
  <div>
    <h1>{props.name}</h1>
    <h2>{props.job}</h2>
    <p>{props.age}</p>
    <p>
      {props.isInPrison ? 'Is in prison' : 'Is not in prison'}
    </p>
  </div>
);

export default Character;
