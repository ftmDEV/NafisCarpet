import React from "react"
import { Typography } from "@mui/material";
import {makeStyles} from "@mui/styles"

export const useStyles = makeStyles(() => ({
    logo :{ 
        display: "inline-flex",
        width:"100%",
        marginBottom:"5%"
    },
    logo_img:{
        width:"55px",
        height:"55px",
        margin:"0 0 0 15px"
    },
    logo_title:{
        fontWeight:'600',
    },
}))
const LogoContainer = ({alt, image, title, subtitle}) => {
    const classes = useStyles()
 
    return (
      <div className={classes.logo}>
        <img alt={alt} src={image} className={classes.logo_img} />
        <div>
          <Typography variant="h6" className={classes.logo_title}>{title}</Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
        </div>
      </div>
    );
}
 
export default LogoContainer;