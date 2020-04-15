import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Board from './Board/Board.jsx';
import CardDialog from './CardDialog/CardDialog.jsx';

import './App.scss';

const App = () => (
    <div className="wrapper">
      <CssBaseline />
      <Board />
      <CardDialog />
    </div>
);

export default App;
