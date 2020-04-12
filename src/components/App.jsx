import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Board from './Board/Board.jsx';

import './App.scss';

const App = () => (
    <div className="wrapper">
      <CssBaseline />
      <Board />
    </div>
);

export default App;
