import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={searchFilters}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

const searchFilters = [
  { label: "All", id: 1 },
  { label: "Country Name", id: 2 },
  { label: "Country Code", id: 3 },
  { label: "Currency", id: 4 },
  { label: "Language", id: 5 },
  { label: "Capital City", id: 6 },
  { label: "Region", id: 7 },
];
