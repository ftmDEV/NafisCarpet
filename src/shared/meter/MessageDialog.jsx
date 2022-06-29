import React from 'react';
import {Typography} from '@mui/material';
import CustomDialog from '../dialog';
import Constant from '../../../utils/constant';
import meterImg from '../../../assets/images/magnifier.png';

const MessageDialog = ({openDialog, handleSubmit, handleCancel}) => {
  return (
    <CustomDialog
      open={openDialog}
      image={meterImg}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    >
      <Typography>
        {Constant.METER_MANAGEMENT.METER_LIST.DELETE_MESSAGE}
      </Typography>
    </CustomDialog>
  );
};

export default MessageDialog;
