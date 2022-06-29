import React, {useState, useEffect} from 'react';

import {Typography, Chip} from '@mui/material';
import {makeStyles} from '@mui/styles';

import OtpInput from 'react-otp-input';

import Constant from '../../utils/constant';

const useStyle = makeStyles({
  root: {
    direction: 'rtl',
    fontSize: '15px',
    fontFamily: 'IranSans !important',
  },
  codeInput: {
    width: '100% !important',
    height: '9vh !important',
    margin: '0 4px',
    border: '2px solid #eee',
    borderRadius: '5px',
  },
  inputsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },

  flexContainer: {
    width: '100%',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const CustomOtpInput = ({state, setState, expireTime}) => {
  const classes = useStyle();

  const [counter, setCounter] = useState(expireTime);
  const minute = counter / 60;
  const second = counter % 60;
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className={classes.root}>
      <OtpInput
        value={state.token}
        onChange={c => setState({...state, token: c})}
        numInputs={5}
        separator={<span> </span>}
        inputStyle={classes.codeInput}
        containerStyle={classes.inputsWrapper}
      />
      {expireTime && (
        <div className={classes.flexContainer}>
          <Chip
            label={`${Math.floor(minute)} : ${second}`}
            color="primary"
            className={classes.root}
          />
          <Typography variant="subtitle2" className={classes.clock}>
            {Constant.VERIFY_CLOCK}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default CustomOtpInput;
