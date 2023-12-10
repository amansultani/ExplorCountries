import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";

import { Outlet } from "react-router-dom";

export default function RootPage() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
