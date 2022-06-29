import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles(theme => ({
  pendingBtn: {
    border: '10px solid #0000',
  },
  upgradeBtn: {
    border: `1px solid ${theme.palette.secondary.light}`,
  },
}));
