import React from 'react';
import {Grid, Paper, Typography} from '@mui/material';
import tavanirLogo from 'src/assets/images/tavanir.png';
import {makeStyles} from '@mui/styles';
import LogoContainer from '../logoContainer/logoContainer';
import CustomTextField from '../TextField';
import Constant from '../../../utils/constant';
import Button from '../button/Button';

export const useStyles = makeStyles(() => ({
  paper: {
    height: '170px',
    direction: 'rtl',
    padding: '20px',
    margin: '20px 0',
    boxShadow:
      'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  textField: {
    margin: '5px 0 !important',
    border: '3px solid black',
  },
}));

const handleVerifyCode = () => {
  console.log('code is correct');
};

const VerificationCode = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <LogoContainer
            alt=""
            image={tavanirLogo}
            title={Constant.USER_UPGRAGE.LOGO_TITLE}
            subtitle={Constant.USER_UPGRAGE.LOGO_SUBTITLE}
          />
          <Typography variant="body1">
            {Constant.USER_UPGRAGE.DESCRIPTION}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6" style={{marginBottom: '15px'}}>
            {Constant.VERIFY_TITLE.MAIN_TITLE} {Constant.VERIFY_TITLE.TITLE}
          </Typography>

          <Typography variant="subtitle1">
            {Constant.VERIFY_TITLE.TITLE}
          </Typography>
          <CustomTextField
            name="verification_code"
            placeholder="6546546464"
            className={classes.textField}
          />
          <Button
            type="default"
            label={Constant.GENERAL.BUTTONS.CONFIRM}
            onClick={event => handleVerifyCode(event)}
            // loading={data.loading}
            loadingStyle={{color: '#fff', marginTop: 0, marginLeft: 10}}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VerificationCode;
