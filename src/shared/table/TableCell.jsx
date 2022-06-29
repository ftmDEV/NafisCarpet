import React from 'react';
import PropType from 'prop-types';
import {Grid, Typography, Chip} from '@mui/material';
import CustomCheckbox from '../checkbox';
import Constant from '../../../utils/constant';
import CustomButton from '../button/Button';

const TableCell = props => {
  const {xs, sm, value, icon, type, label, style, className, onClick} = props;
  return (
    <Grid item xs={xs} sm={sm} onClick={onClick}>
      {type === 'text' && (
        <div
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          {icon && (
            <div>
              <img
                alt=""
                src={Constant.STATUS_ICON[icon]}
                style={{margin: '0 6px'}}
              />
            </div>
          )}
          <Typography style={style || {lineHeight: '48px'}} variant="body2">
            {value}
          </Typography>
        </div>
      )}
      {type === 'image' && (
        <img alt="" src={value} style={{marginTop: '15px'}} />
      )}

      {type === 'chip' && (
        <Chip
          label={Constant.STATUS[value]}
          style={{
            backgroundColor: Constant.STATUS_COLOR[value],
            color: '#fff',
            fontSize: '12px',
          }}
          variant="contained"
        />
      )}
      {type === 'checkbox' && <CustomCheckbox />}
      {type === 'button' && (
        <CustomButton className={className} label={label} onClick={onClick} />
      )}
    </Grid>
  );
};

TableCell.propTypes = {
  xs: PropType.number,
  sm: PropType.number,
  value: PropType.node,
  type: PropType.string,
  onClick: PropType.func,
  // typeIcon: PropType.string,
};
TableCell.defaultProps = {
  xs: 12,
  sm: 12,
  value: '',
  type: 'text',
  onClick: () => {},
  // typeIcon: 'text',
};

export default TableCell;
