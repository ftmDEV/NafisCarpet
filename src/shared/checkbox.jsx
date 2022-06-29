import React, {useEffect, useState} from 'react';
import {FormGroup, FormControlLabel, Checkbox} from '@mui/material';

import {makeStyles} from '@mui/styles';
import PropType from 'prop-types';

const useStyles = makeStyles({
  root: {
    fontSize: '15px',
    fontFamily: 'IranSans !important',
  },
});
const CustomCheckbox = props => {
  const {label, className, name, onChange, value} = props;

  const classes = useStyles();
  const [checked, setChecked] = useState(value);

  const handleChange = event => {
    setChecked(event.target.checked);
    onChange(event.target.checked, name);
  };

  useEffect(() => {
    setChecked(value);
  }, [value]);

  return (
    <FormGroup row className={classes.root}>
      <FormControlLabel
        control={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <Checkbox
            className={className}
            name={name}
            checked={checked}
            onChange={handleChange}
            color="primary"
          />
        }
        label={label}
      />
    </FormGroup>
  );
};

CustomCheckbox.propTypes = {
  label: PropType.string,
  className: PropType.string,
  name: PropType.string,
  onChange: PropType.func,
  value: PropType.bool,
};

CustomCheckbox.defaultProps = {
  label: '',
  className: '',
  name: '',
  onChange: () => {},
  value: false,
};

export default CustomCheckbox;
