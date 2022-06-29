import * as React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {makeStyles} from '@mui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  textarea: {
    width: '100%',
    margin: '5px 0 15px 0 ',
    padding: '4px 10px 5px 4px',
    borderRadius: '5px',
    border: '1px solid #eeee !important',
    outline: 'none',
    height: '6vh',
    fontSize: '15px',
    fontFamily: 'IranSans !important',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
    '&::placeholder': {
      color: '#d1d3d1',
    },
    '& fieldset': {
      border: 'none',
    },
    '&:invalid': {
      color: 'red',
      backgroundColor: 'red',
    },
  },
});

const CustomTextarea = props => {
  const classes = useStyles();

  const {
    className,
    name,
    // pattern
    error,
    placeholder,
    required,
    style,
    defaultValue,
    onChange,
    onBlur,
  } = props;

  const handleChange = event => {
    if (typeof onChange === 'function') {
      onChange(event.target.value, name);
    }
  };

  return (
    <TextareaAutosize
      minRows={2}
      maxRows={4}
      className={clsx(classes.textarea, className)}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      style={style}
      required={required}
      error={error}
      onChange={handleChange}
      onBlur={onBlur}
    />
  );
};

export default CustomTextarea;
