import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const CountryNotFound = () => {
  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Box>
        <Stack spacing={2} alignItems="center">
          <Typography variant="h5" gutterBottom>
            Content Not Found!
          </Typography>
          <SentimentVeryDissatisfiedIcon fontSize="large" />
        </Stack>
      </Box>
    </Box>
  );
};
export default CountryNotFound;
