import React from "react";
import PropType from "prop-types";
import { Grid, Checkbox, Typography, Button } from "@mui/material";
// import IconButton from "src/components/shared/iconbutton";
import { useStyles } from "./Table.Style";
import CustomButton from "../button/Button";
import { constant } from "../../utils/constant";

const TableCell = (props) => {
  const { xs, sm, value, type, onClick, typeIcon, tooltip, handleClick } =
    props;
  const classes = useStyles();

  return (
    <Grid item xs={xs} sm={sm} onClick={onClick}>
      {type === "text" && (
        <Typography
          style={{
            lineHeight: "48px",
            display: "flex",
            justifyContent: "center",
          }}
          variant="body1"
        >
          {value}
        </Typography>
      )}
      {/* {type === "image" && (
        <Avatar
          variant="square"
          alt="image"
          src={`data:image/jpeg;base64,${value}`}
          classes={{
            img: classes.avatar,
            square: classes.avatarContainer,
          }}
        />
      )} */}
      {/* {type === "icon" && (
        <IconButton
          className={classes.editButton}
          onClick={onClick}
          icon={typeIcon}
          tooltip={tooltip}
          size="large"
        />
      )} */}
      {type === "checkbox" && <Checkbox />}
      {type === "button" && (
        <Button variant="contained" onClick={handleClick}>
          {value}
        </Button>
      )}
    </Grid>
  );
};

TableCell.propTypes = {
  xs: PropType.number,
  sm: PropType.number,
  value: PropType.node.isRequired,
  type: PropType.string,
  onClick: PropType.func,
  typeIcon: PropType.string,
  tooltip: PropType.string,
};
TableCell.defaultProps = {
  xs: 12,
  sm: 12,
  type: "text",
  onClick: () => {},
  typeIcon: "text",
  tooltip: "text",
};

export default TableCell;
