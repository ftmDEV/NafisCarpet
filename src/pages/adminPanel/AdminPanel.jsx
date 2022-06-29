import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";

import { useStyles } from "./Admin.Style";
import CustomDrawer from "../../shared/drawer/Drawer";

const AdminPanel = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  return (
    <CustomDrawer>
      <Grid container>
        <Grid item sm={2}></Grid>
        <Grid item sm={10}>
          <Typography>kfjnd</Typography>
        </Grid>
      </Grid>
    </CustomDrawer>
  );
};

export default AdminPanel;
