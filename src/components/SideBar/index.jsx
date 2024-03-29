import React from "react";
import { Link } from "react-router-dom";

import { Container } from "@mui/material";

import "./styles.scss";

const SideBar = () => {
  return (
    <Container className="sidebar">
      <Link to="/departments">Departments</Link>
    </Container>
  );
};

export default SideBar;
