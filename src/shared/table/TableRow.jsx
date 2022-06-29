import React from 'react';
import PropType from 'prop-types';
import Grid from '@mui/material/Grid';
import {useStyles} from './Table.Style';

const TableRow = props => {
  const {children, onClick} = props;

  const classes = useStyles();

  return (
    <Grid
      container
      wrap="nowrap"
      className={classes.tableRow}
      onClick={onClick}
      spacing={2}
    >
      {children}
    </Grid>
  );
};

TableRow.propTypes = {
  children: PropType.node.isRequired,
  onClick: PropType.func,
};
TableRow.defaultProps = {
  onClick: () => {},
};

export default TableRow;
