import makeStyles from '@mui/styles/makeStyles';

export const useStyles = makeStyles(theme => ({
  tableToolbarContainer: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
  },
  tableToolbarTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    lineHeight: '45px',
    color: '#fff',
  },
  tableToolbarSearchText: {
    width: '200px !important',
    color: '#fff !important',
  },
  table: {
    width: '100%',
    padding: '15px',
    border: '1px solid #eee',
    boxShadow: '0px 8px 24px 0px rgba(0, 0, 0, 0.05)',
  },
  tableHeader: {
    width: 'auto',
    backgroundColor: theme.palette.grey.main,
    margin: '10px 15px',
    padding: '10px',
    borderRadius: '18px',
    borderBottom: `2px solid ${theme.palette.grey.light}`,
  },
  tableBody: {
    overflow: 'auto',
    padding: '0 10px',
  },
  tableRow: {
    padding: '10px 15px',
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    cursor: 'pointer',
  },
  editButton: {
    background: theme.palette.button.main,
    '&:hover': {
      background: `${theme.palette.button.hover} !important`,
    },
  },
  avatar: {
    width: 'auto !important',
  },
  avatarContainer: {
    width: 'auto !important',
    display: 'block !important',
  },
  searchFiled: {
    width: '21%',
    margin: 5,
    height: 30,
  },
}));
