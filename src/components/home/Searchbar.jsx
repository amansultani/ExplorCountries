import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const searchTerm = useRef();
  const searchCriteria = useRef();
  const navigate = useNavigate();

  const submitHandler = () => {
    const term = searchTerm.current.value;
    const criteria = searchCriteria.current.value;
    navigate(`/countries/${term}/${criteria}`);
  };

  return (
    <Paper elevation={1} sx={{ margin: 1, padding: 1 }}>
      <Stack direction="row">
        <TextField
          id="filled-select-currency"
          select
          defaultValue="name"
          variant="outlined"
          size="small"
          sx={{ width: 400 }}
          inputRef={searchTerm}
        >
          {searchFilters.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-basic"
          label="Search Countries"
          variant="outlined"
          size="small"
          inputRef={searchCriteria}
          fullWidth
        />
        <Button
          variant="contained"
          size="small"
          startIcon={<TravelExploreIcon />}
          sx={{ width: 200 }}
          onClick={submitHandler}
        >
          Search
        </Button>
      </Stack>
    </Paper>
  );
}

const searchFilters = [
  { label: "All", id: "all" },
  { label: "Country Name", id: "name" },
  { label: "Country Code", id: "alpha" },
  { label: "Currency", id: "currency" },
  { label: "Language", id: "lang" },
  { label: "Capital City", id: "capital" },
  { label: "Region", id: "region" },
  { label: "Sub Region", id: "subregion" },
];
