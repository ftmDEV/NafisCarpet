import React from 'react';
import {Typography, Grid} from '@mui/material';
import CustomDialog from '../dialog';
import CustomTextField from '../TextField';
import Constant from '../../../utils/constant';

const MeterDialog = ({
  openDialog,
  handleSubmit,
  handleCancel,
  handleChange,
}) => {
  return (
    <CustomDialog
      open={openDialog}
      title={Constant.METER_MANAGEMENT.METER_LIST.ADD_METER}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    >
      <Grid container spacing={3} style={{width: '100%', margin: '10px'}}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2">
            {Constant.METER_MANAGEMENT.METER_LIST.METER_NAME}
          </Typography>
          <CustomTextField
            label=""
            name="name"
            type="text"
            variant="outlined"
            error
            style={{width: '100%'}}
            onChange={handleChange}
            placeholder={Constant.METER_MANAGEMENT.METER_LIST.METER_NAME}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle2">
            {Constant.METER_MANAGEMENT.METER_LIST.BILL_ID}
          </Typography>
          <CustomTextField
            label=""
            name="billing_id"
            type="text"
            variant="outlined"
            error
            style={{width: '100%'}}
            onChange={handleChange}
            placeholder="1234569887"
            required
          />
        </Grid>
      </Grid>
    </CustomDialog>
  );
};

export default MeterDialog;
