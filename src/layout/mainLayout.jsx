import React from "react";
import { Container } from "@mui/material";
import Navbar from "../components/navbar";
const MainLayout = ({ children }) => {
  <Container>
    <Navbar />
    {children}
  </Container>;
};
export default MainLayout;
