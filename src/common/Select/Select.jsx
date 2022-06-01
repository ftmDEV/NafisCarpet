import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  select: {
    border: "1px solid #fff",
    backgroundColor: theme.palette.cream.main,
    color: "#000",
    fontSize: "30px",
    borderRadius: "10px",
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "blue",
      fontSize: "50px",
    },
  },
}));

const SelectSmall = ({ label, items, onInputChange }) => {
  const [value, setValue] = React.useState("");
  const classes = useStyles();

  const handleChange = (event) => {
    onInputChange(event.target.value);
  };

  return (
    <FormControl
      sx={{ m: 1, minWidth: 200, fontSize: "20px", backgroundColor: "#fff" }}
      size="small"
    >
      <InputLabel id="demo-select-small">{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        // label={label}
        onChange={handleChange}
        className={classes.select}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items.map((item) => (
          <MenuItem value={item.id}>{item.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectSmall;
