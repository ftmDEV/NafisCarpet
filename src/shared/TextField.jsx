import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {TextField, InputAdornment, Icon} from '@mui/material';
import clsx from 'clsx';
import PropType from 'prop-types';

const useStyles = makeStyles({
  inputStyle: {
    margin: '5px 0 15px 0 ',
    backgroundColor: '#ffff',
    padding: '4px 10px 0 5px 4px',
    borderRadius: '5px',
    outline: 'none',
    width: '95%',
    fontSize: '15px',
    fontFamily: 'IranSans !important',
    height: '40px',
    border: '1px solid #eeee !important',
    '&::placeholder': {
      color: 'black',
    },
    '& fieldset': {
      border: 'none',
    },
    '&:invalid': {
      color: 'red',
      backgroundColor: 'red',
    },
  },
  placeholderStyle: {
    fontSize: '14px',
    fontFamily: 'IranSans !important',
  },
});

const CustomTextField = props => {
  const {
    // label,
    className,
    autoFocus,
    disabled,
    error,
    helperText,
    multiline,
    placeholder,
    type,
    required,
    icon,
    style,
    defaultValue,
    onChange,
    onBlur,
    name,
    variant,
    maxRows,
    // pattern
  } = props;
  const classes = useStyles();

  const [value, setValue] = useState(defaultValue);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = event => {
    setValue(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event.target.value, name);
    }
  };

  const handleBlur = event => {
    if (typeof onBlur === 'function') {
      onBlur(event.target.value);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <TextField
      name={name}
      // label={label}
      style={style}
      className={clsx(className, classes.inputStyle)}
      autoFocus={autoFocus}
      disabled={disabled}
      error={error}
      helperText={helperText}
      multiline={multiline}
      maxRows={maxRows}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      type={showPassword ? 'text' : type}
      value={value}
      required={required}
      variant={variant}
      InputProps={{
        classes: {root: classes.placeholderStyle},
        startAdornment: icon && (
          <InputAdornment position="start">
            <Icon>{icon}</Icon>
          </InputAdornment>
        ),
        endAdornment: type === 'password' && (
          <InputAdornment
            position="end"
            onClick={handleClickShowPassword}
            style={{cursor: 'pointer'}}
          >
            {showPassword ? (
              <Icon color="disabled">visibility</Icon>
            ) : (
              <Icon color="disabled">visibility_off</Icon>
            )}
          </InputAdornment>
        ),
      }}
      minRows={4}
      size="small"
    />
  );
};

CustomTextField.propTypes = {
  className: PropType.string,
  // label: PropType.string,
  defaultValue: PropType.string,
  autoFocus: PropType.bool,
  disabled: PropType.bool,
  error: PropType.bool,
  helperText: PropType.string,
  multiline: PropType.bool,
  // rows: PropType.number,
  maxRows: PropType.number,
  placeholder: PropType.string,
  type: PropType.string,
  required: PropType.bool,
  icon: PropType.string,
  onBlur: PropType.func,
  // onChange: PropType.func,
  style: PropType.objectOf(PropType.object),
  name: PropType.string.isRequired,
  variant: PropType.string,
};

CustomTextField.defaultProps = {
  // label: '',
  className: '',
  autoFocus: false,
  disabled: false,
  error: false,
  helperText: '',
  multiline: false,
  // rows: 1,
  maxRows: 1,
  placeholder: '',
  type: 'text',
  required: false,
  icon: null,
  style: {},
  defaultValue: '',
  variant: 'outlined',
  onBlur: () => {},
  // onChange: () => {},
};

export default CustomTextField;
