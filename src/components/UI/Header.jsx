import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small" onClick={() => window.open("https://restcountries.com", "_blank")}>Rest Countries API</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          EXPLORE COUNTRIES
        </Typography>

        <Button variant="outlined" size="small" onClick={() => window.open("https://github.com/amansultani/ExplorCountries", "_blank")} >
          Github Reopsitory
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  );
}

export default Header;
