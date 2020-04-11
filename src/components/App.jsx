import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Board from './Board/Board.jsx';

import './App.scss';

export default function App() {
  return (
    <div className="wrapper">
      <CssBaseline />
      <Board />
    </div>
  );
}
