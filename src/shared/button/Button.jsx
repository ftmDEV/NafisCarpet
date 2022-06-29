import React from 'react';
import PropType from 'prop-types';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import CircularProgress from '@mui/material/CircularProgress';
import {useStyles} from './Button.Style';

const CustomButton = props => {
  const {
    label,
    onClick,
    disabled,
    style,
    className,
    loading,
    loadingStyle,
  } = props;
  const classes = useStyles();
  return (
    <Button
      className={clsx(classes.root, className)}
      disabled={disabled}
      style={style}
      onClick={onClick}
      loading={loading}
    >
      {props.loading ? (
        <CircularProgress className={classes.loading} style={loadingStyle} />
      ) : (
        ''
      )}
      {label}
    </Button>
  );
};

CustomButton.propTypes = {
  label: PropType.string.isRequired,
  disabled: PropType.bool,
  style: PropType.objectOf(PropType.object),
  onClick: PropType.func.isRequired,
  className: PropType.string,
  loading: PropType.bool,
};
CustomButton.defaultProps = {
  disabled: false,
  style: {},
  className: '',
  loading: false,
};

export default CustomButton;
