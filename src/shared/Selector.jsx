import React, {useState} from 'react';
import {makeStyles} from '@mui/styles';
import {MenuItem, Select} from '@mui/material';
import PropType from 'prop-types';

const useStyles = makeStyles(() => ({
  select: {
    width: '100%',
    margin: '5px 0 15px 0 ',
    backgroundColor: '#f6f6f6',
    padding: '4px 10px 0 5px 4px',
    borderRadius: '5px',
    border: '2px solid #f2f2f2',
    outline: 'none',
    height: '6vh',
    fontSize: '15px',
    fontFamily: 'IranSans !important',
    boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
    '&::placeholder': {
      color: '#eee',
    },
    '& fieldset': {
      border: 'none',
      background: 'none',
    },
    '&:invalid': {
      color: 'red',
      backgroundColor: 'red',
    },
  },
  placeholderStyle: {
    fontSize: '10px',
    fontFamily: 'IranSans !important',
  },
  menuItem: {
    fontFamily: 'IranSans !important',
  },
}));

const Selector = props => {
  const {name, defaultValue, onChange, options} = props;
  const classes = useStyles();
  const [value, setValue] = useState(defaultValue);

  const handleChange = event => {
    setValue(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event.target.value, name);
    }
  };

  return (
    <div>
      <>
        <Select
          name={name}
          value={value}
          className={classes.select}
          variant="outlined"
          onChange={handleChange}
          defaultValue={defaultValue}
          InputProps={{
            classes: {root: classes.placeholderStyle},
          }}
          autoWidth
        >
          {options.map(item => {
            return (
              <MenuItem
                key={item.id}
                value={item.id}
                className={classes.menuItem}
              >
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </>
    </div>
  );
};

Selector.propTypes = {
  defaultValue: PropType.string,
  onChange: PropType.func,
  options: PropType.arrayOf(PropType.string),
  // label: PropType.string.isRequired,
  // style: PropType.objectOf(PropType.object),
};
Selector.defaultProps = {
  defaultValue: '',
  onChange: () => {},
  options: [],
  // style: {},
};

export default Selector;
