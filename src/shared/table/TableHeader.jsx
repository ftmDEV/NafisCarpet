import React from 'react';
import PropType from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useStyles} from './Table.Style';
import CustomCheckbox from '../checkbox';

const TableHeader = props => {
  const {headers} = props;
  const classes = useStyles();

  return (
    <Grid container wrap="nowrap" className={classes.tableHeader}>
      {headers.map(item => {
        return (
          <Grid
            key={item.id}
            item
            xs={item.xs}
            sm={item.sm}

            // alignItems="center"
          >
            {item.checkbox ? (
              <div className={classes.flex}>
                <CustomCheckbox />
                <Typography variant="subtitle2">{item.title}</Typography>
              </div>
            ) : (
              <Typography variant="subtitle2">{item.title}</Typography>
            )}
          </Grid>
        );
      })}
    </Grid>
  );
};

TableHeader.propTypes = {
  headers: PropType.arrayOf(PropType.object).isRequired,
};

export default TableHeader;
