import React, { useState } from "react";
import { DataGrid, faIR } from "@mui/x-data-grid";
import { headerColumn } from "./header";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

const rows = [
  {
    id: 1,
    col1: "فرش بیجار",
    col2: "$345",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
  {
    id: 2,
    col1: "فرش بیجار",
    col2: "$766",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
  {
    id: 3,
    col1: "فرش بیجار",
    col2: "$766",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
  {
    id: 4,
    col1: "فرش بیجار",
    col2: "$345",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
  {
    id: 5,
    col1: "فرش بیجار",
    col2: "$766",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
  {
    id: 6,
    col1: "فرش بیجار",
    col2: "$766",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
  {
    id: 7,
    col1: "فرش بیجار",
    col2: "$345",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
  {
    id: 8,
    col1: "فرش بیجار",
    col2: "$766",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
  {
    id: 9,
    col1: "فرش بیجار",
    col2: "$766",
    col3: "3%",
    col4: "",
    col5: "5",
    col6: "01/04/22",
  },
];
const CustomTable = () => {
  const [checkboxSelection, setCheckboxSelection] = useState(true);
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={headerColumn}
        components={{
          LoadingOverlay: LinearProgress,
        }}
        checkboxSelection={checkboxSelection}
        sx={{
          padding: "10px 30px",
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-columnHeaderTitleContainer": {
            fontSize: "27px",
          },
          "& .MuiDataGrid-cell": {
            fontSize: "20px",
            textAlign: "center",
          },
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        initialState={{
          pagination: {
            pageSize: 10,
          },
        }}
        localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
      />
    </div>
  );
};

export default CustomTable;
