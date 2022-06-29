import React from 'react';
import {Typography} from '@mui/material';
import Constant from '../../../utils/constant';
import CustomDialog from '../dialog';
import CustomTextField from '../TextField';
import smsImg from '../../../assets/images/sms.png';

const VerifyDialog = ({
  openDialog,
  phoneNumber,
  handleChange,
  handleSubmit,
  handleCancel,
  handleResendSms,
}) => {
  return (
    <CustomDialog
      open={openDialog}
      image={smsImg}
      handleResendSms={handleResendSms}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      type="verify"
    >
      <Typography varaint="subtitle2">
        {Constant.METER_MANAGEMENT.METER_LIST.VERIFY_METER} {phoneNumber}{' '}
        {Constant.METER_MANAGEMENT.METER_LIST.VERIFY_METER_1}
      </Typography>
      <CustomTextField
        name="token"
        onChange={handleChange}
        placeholder={
          Constant.METER_MANAGEMENT.METER_LIST.VERIFY_METER_PLACEHOLDER
        }
      />
    </CustomDialog>
  );
};

export default VerifyDialog;
