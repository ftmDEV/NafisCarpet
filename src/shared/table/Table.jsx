import React from 'react';
import {Paper, Pagination} from '@mui/material';
import PropType from 'prop-types';
import TableHeader from './TableHeader';
import {useStyles} from './Table.Style';

const Table = props => {
  const {children, headers, totalPage, page, handlePageChange} = props;
  const classes = useStyles();
  return (
    <Paper className={classes.table}>
      <TableHeader headers={headers} />
      <div className={classes.tableBody}>{children}</div>
      <Pagination count={totalPage} page={page} onChange={handlePageChange} />
    </Paper>
  );
};

Table.propTypes = {
  headers: PropType.arrayOf(PropType.object).isRequired,
  children: PropType.node.isRequired,
};
Table.defaultProps = {};

export default Table;
