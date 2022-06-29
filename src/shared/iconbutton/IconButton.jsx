import React from 'react';
import PropType from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const CustomButton = props => {
  const {tooltip, onClick, disabled, className, icon, color} = props;
  return (
    <Tooltip title={tooltip}>
      <IconButton disabled={disabled} className={className} onClick={onClick} size="large">
        <i className="material-icons" style={{color}}>
          {icon}
        </i>
      </IconButton>
    </Tooltip>
  );
};

CustomButton.propTypes = {
  tooltip: PropType.string,
  disabled: PropType.bool,
  onClick: PropType.func.isRequired,
  className: PropType.string,
  icon: PropType.string.isRequired,
  color: PropType.string,
};
CustomButton.defaultProps = {
  disabled: false,
  className: '',
  tooltip: '',
  color: '#fff',
};

export default CustomButton;
