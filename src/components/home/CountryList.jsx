import React from "react";
import Country from "./Country";
import Grid from "@mui/material/Grid";

const CountryList = ({ countries }) => {
  return (
    <Grid
      container
      spacing={4}
      marginTop={3}
      key={"countries"}
      justifyContent="space-around"
    >
      {countries.map((country) => {
        return <Country key={country.name.official} country={country} />;
      })}
    </Grid>
  );
};

export default CountryList;
