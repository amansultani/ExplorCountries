import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import CardMedia from "@mui/material/CardMedia";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Paper, Link, Grid } from "@mui/material";
import CountryNotFound from "./CountryNotFound";
import LocalTime from "./LocalTime";

const CountryDetail = ({ country }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const aspectRatio = 16 / 9;
  const fixedHeight = 200;
  const fixedWidth = aspectRatio * fixedHeight;

  let content;

  if (country) {
    content = (
      <main>
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Grid container spacing={3} justifyContent="space-evenly">
            <Grid item>
              <CardMedia
                sx={{ width: fixedWidth, height: fixedHeight }}
                image={country.flags.svg}
                title={country.flags.alt}
              />
              <Typography variant="body2" textAlign="center" marginTop={1}>
                Flag
              </Typography>
            </Grid>
            <Grid item>
              <CardMedia
                sx={{ width: fixedWidth, height: fixedHeight }}
                image={country.coatOfArms.svg}
                title={country.flags.alt}
              />
              <Typography variant="body2" textAlign="center" marginTop={1}>
                Coat of Arms
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
          <Typography variant="h5" textAlign="center" marginBottom={3}>
            The {country.name.official}
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Official Name:</b>
                  </TableCell>
                  <TableCell>{country.name.official}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Capital:</b>
                  </TableCell>
                  <TableCell>{country.capital}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Continent:</b>
                  </TableCell>
                  <TableCell>{country.region}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Area:</b>
                  </TableCell>
                  <TableCell>
                    {country.area} mi
                    <sup style={{ fontSize: "smaller", verticalAlign: "top" }}>
                      2
                    </sup>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Population:</b>
                  </TableCell>
                  <TableCell>{country.population.toLocaleString()}</TableCell>
                </TableRow>
                {country.timezones[0] && (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <b>Date & Time:</b>
                    </TableCell>
                    <TableCell>
                      <LocalTime localTimeZone={country.timezones[0]} />
                    </TableCell>
                  </TableRow>
                )}
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Start of Week:</b>
                  </TableCell>
                  <TableCell>{country.startOfWeek}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <b>Country Map :</b>
                  </TableCell>
                  <TableCell>
                    <Link
                      href={country.maps.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Map
                    </Link>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <CardActions>
          <Button size="small" variant="outlined" onClick={handleGoBack}>
            Go Back
          </Button>
        </CardActions>
      </main>
    );
  } else {
    content = <CountryNotFound />;
  }

  return content;
};

export default CountryDetail;
