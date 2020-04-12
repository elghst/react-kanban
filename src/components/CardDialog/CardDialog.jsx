import React from 'react';
import propTypes from 'prop-types';
import { Dialog, Button } from '@material-ui/core';

const CardDialog = ({ onClose, open }) => (
    <Dialog onClose={onClose()} open={open}>
      TEST TEST
    </Dialog>
);

export default CardDialog;

CardDialog.propTypes = {
  onClose: propTypes.func.isRequired,
  open: propTypes.bool.isRequired,
};
