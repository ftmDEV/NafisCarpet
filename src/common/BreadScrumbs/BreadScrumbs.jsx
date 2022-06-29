import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BasicBreadcrumbs({ product }) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ fontSize: "30px", marginBottom: "20px" }}
      >
        <Link underline="hover" color="inherit" to="/landing">
          صفحه اصلی
        </Link>
        <Link underline="hover" color="inherit" to="/store">
          فروشگاه
        </Link>
        <Typography variant="h4">{product}</Typography>
      </Breadcrumbs>
    </div>
  );
}
