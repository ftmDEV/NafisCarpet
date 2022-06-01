import React from "react";
import { Paper, Pagination } from "@mui/material";
import PropType from "prop-types";
import { useStyles } from "./Table.Style";
// import TableToolbar from './TableToolbar';
import TableHeader from "./TableHeader";
import { headerColumn } from "../../pages/adminPanel/header";

const Table = (props) => {
  const {
    // onAdd,
    // title,
    children,
    // searchState,
    // handleSearch,
    // searchData,
    // addButton,
  } = props;

  const classes = useStyles();

  return (
    <Paper
      style={{
        width: "100%",
        margin: "0 0 40px",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      }}
    >
      {/* <TableToolbar
        onAdd={onAdd}
        title={title}
        searchState={searchState}
        handleSearch={handleSearch}
        searchData={searchData}
        addButton={addButton}
      /> */}
      <TableHeader headers={headerColumn} />
      <div className={classes.tableBody}>{children}</div>
      <Pagination count={4} />
    </Paper>
  );
};

Table.propTypes = {
  headers: PropType.arrayOf(PropType.object).isRequired,
  children: PropType.node.isRequired,
  // onAdd: PropType.func,
  // title: PropType.string,
  // searchState: PropType.bool,
  // searchData: PropType.string,
  // addButton: PropType.bool,
};
Table.defaultProps = {
  // onAdd: () => {},
  // title: '',
  // searchState: false,
  // searchData: '',
  // addButton: true,
};

export default Table;
