import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Checkbox,
} from "@mui/material";

const CustomTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              //   indeterminate={numSelected > 0 && numSelected < rowCount}
              //   checked={rowCount > 0 && numSelected === rowCount}
              //   onChange={onSelectAllClick}
              inputProps={{
                "aria-label": "select all desserts",
              }}
            />
          </TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  );
};

export default CustomTable;
