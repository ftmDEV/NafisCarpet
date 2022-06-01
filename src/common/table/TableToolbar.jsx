import React, { useState} from 'react';
import PropType from 'prop-types';
import Typography from "@mui/material/Typography";
import Button from 'src/components/shared/button/Button';
import IconButton from "@mui/material/IconButton";
import TextField from "src/components/shared/TextField";
import {useStyles} from './Table.Style';
// import {getUserBySearch} from '../../pages/users/User.Action';

const TableToolbar = props => {
  const {onAdd, title, handleSearch, searchState, searchData, addButton} = props;
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
  });
  // const [result, getData] = getUserBySearch(state);

  const onChange = (value, name) => {
    setState({...state, [name]: value});
  };

  // const handleSearchResult = () => {
  //   getData();
  // };

  // useEffect(() => {
  //   if (typeof searchData === 'function') {
  //     searchData(result)
  //   }
  // }, [result])

  const classes = useStyles();
  return (
    <div className={classes.tableToolbarContainer}>
      <Typography className={classes.tableToolbarTitle}>{title}</Typography>
      {addButton && <Button type="default" label="add" onClick={onAdd} />}
      {searchState &&
      (
        <div style={{background: '#fff', borderRadius: 3, display: 'flex', justifyContent: 'center', width: '75%'}}>
          <TextField
            defaultValue={state.firstName}
            name="firstName"
            label="First Name"
            autoFocus
            onChange={onChange}
            style={classes.searchFiled}
          />
          <TextField
            defaultValue={state.lastName}
            name="lastName"
            label="Last Name"
            onChange={onChange}
            style={classes.searchFiled}
          />
          <TextField
            defaultValue={state.email}
            name="email"
            label="Email"
            type="email"
            onChange={onChange}
            style={classes.searchFiled}
          />
          <TextField
            defaultValue={state.mobileNumber}
            name="mobileNumber"
            label="Mobile Number"
            onChange={onChange}
            style={classes.searchFiled}
          />
          <Button
            type="default"
            label="Search"
            style={{background: '#1ca7ec', width: '5%', textTransform: 'capitalize'}}
            // onClick={handleSearchResult}
          />
        </div>
      )}
      <div>
        {searchData && (
          <IconButton style={{color: '#fff'}} onClick={handleSearch} size="large">
            <i className="material-icons">
              search
            </i>
          </IconButton>
        )}
        <Button type="default" label="add" onClick={onAdd} />
      </div>
    </div>
  );
};

TableToolbar.propTypes = {
  onAdd: PropType.func,
  title: PropType.string,
  handleSearch: PropType.func,
  searchState: PropType.bool,
  addButton: PropType.bool,
  searchData: PropType.func,
};
TableToolbar.defaultProps = {
  onAdd: () => {
  },
  title: '',
  handleSearch: () => {
  },
  searchState: false,
  addButton: true,
  searchData: () => {
  }
};

export default TableToolbar;
