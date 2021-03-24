/* eslint-disable react/destructuring-assignment */
import React from 'react';

const Fish = (props) => (
  // eslint-disable-next-line prefer-template
  <p>{ '><' + ('=').repeat(props.size) + '°>' }</p>);

export default Fish;
