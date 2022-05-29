import React from "react";
import { Card } from "@mui/material";
import CustomTable from "../../common/table/Table";
import AddNewProduct from "./AddNewProduct";

const AdminPanel = () => {
  return (
    <div>
      <Card>
        <CustomTable />
      </Card>
      <AddNewProduct />
    </div>
  );
};

export default AdminPanel;
