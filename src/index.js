import React from 'react';
import ReactDOM from 'react-dom';
import Cats from './Cats';

ReactDOM.render(
  // <Count label='counter'/>,  // this is JSX, transpiler will make regular JS from this JSX
  <Cats />,
  document.getElementById('root')
);
