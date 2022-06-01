import React from "react";
import PropType from "prop-types";
import { Grid, Checkbox, Typography } from "@mui/material";
import { useStyles } from "./Table.Style";

const TableHeader = ({ headers }) => {
  const classes = useStyles();

  return (
    <Grid container wrap="nowrap" className={classes.tableHeader}>
      <Checkbox />

      {headers?.map((item) => {
        return (
          <Grid
            key={item.title}
            item
            xs={item.xs}
            sm={item.sm}
            className={classes.flex}
          >
            <Typography variant="subtitle1">{item.title}</Typography>
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
