import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  root: {
    width: '120px',
    height: '40px',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '5px !important',
    color: '#fff',
    margin: '10px',
    '&:hover': {
      color: '#fff',
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  loading: {
    width: '20px !important',
    height: '20px !important',
    marginLeft: 5,
  },
}));
