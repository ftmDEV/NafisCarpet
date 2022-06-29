import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {makeStyles} from '@mui/styles';
import PropType from 'prop-types';
import CustomButton from './button/Button';
import Constant from '../../utils/constant';

const useStyles = makeStyles(theme => ({
  dialog: {
    fontSize: '15px',
    fontFamily: 'IranSans !important',
    textAlign: 'center',
  },
  errorBtn: {
    backgroundColor: theme.palette.error.main,
    '&:hover ': {
      backgroundColor: theme.palette.error.dark,
    },
  },
  resendBtn: {
    backgroundColor: '#fff',
    color: '#000',
    '&:hover ': {
      color: '#000',
      backgroundColor: '#fff',
    },
  },
  flexEnd: {
    display: 'flex',
    justifyContent: 'end',
  },
}));
const CustomDialog = props => {
  const {
    title,
    image,
    type,
    children,
    handleSubmit,
    handleCancel,
    handleResendSms,
    open,
    submitLoading,
  } = props;

  const classes = useStyles();
  const onClick = () => {
    handleResendSms();
  };
  const onSubmit = () => {
    handleSubmit();
  };

  const onClose = () => {
    handleCancel();
  };
  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.dialog}
      >
        <div>
          <IconButton
            className={classes.flexEnd}
            size="small"
            onClick={onClose}
          >
            <ClearIcon />
          </IconButton>
        </div>
        <div>
          <img alt="" src={image} />
        </div>
        <DialogTitle
          id="alert-dialog-title"
          style={{textAlign: 'center', marginTop: '20px'}}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {type === 'verify' && (
            <CustomButton
              label={Constant.GENERAL.BUTTONS.RESEND_CODE}
              onClick={onClick}
              className={classes.resendBtn}
            />
          )}
          <CustomButton
            label={Constant.GENERAL.BUTTONS.SUBMIT}
            onClick={onSubmit}
            loading={submitLoading}
            loadingStyle={{color: '#fff', marginLeft: 10}}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

CustomDialog.propTypes = {
  title: PropType.string,
  // children: PropType.func.isRequired,
  handleSubmit: PropType.func.isRequired,
  handleCancel: PropType.func,
};
CustomDialog.defaultProps = {
  handleCancel: () => null,
  title: '',
};

export default CustomDialog;
