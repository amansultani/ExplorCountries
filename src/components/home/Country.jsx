import * as React from "react";
import { DateTime } from "luxon";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useSubmit } from "react-router-dom";

export default function Country({ country }) {
  const submit = useSubmit();
  const aspectRatio = 16 / 9;
  const fixedHeight = 160;
  const fixedWidth = aspectRatio * fixedHeight;
  const timeZone = country.timezones[0];

  const now = DateTime.now()
    .setZone(timeZone)
    .toLocaleString(DateTime.TIME_SIMPLE);

  return (
    <Grid
      sx={{
        "&:hover": {
          cursor: "pointer",
        },
      }}
      item
      onClick={() => {
        submit(
          { data: country },
          {
            method: "post",
            encType: "application/json",
            action: `/countries/${country.name.common}`,
          }
        );
      }}
    >
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{ width: fixedWidth, height: fixedHeight }}
          image={country.flags.png}
          title={country.flags.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {country.name.official}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            <b>Capital: </b>
            {country.capital}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            <b>Contetent: </b>
            {country.region}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            <b>Area: </b>
            {country.area} {"  mi"}
            <sup style={{ fontSize: "smaller", verticalAlign: "top" }}>
              2
            </sup>{" "}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            <b>Population: </b>
            {country.population.toLocaleString()}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              submit(
                { data: country },
                {
                  method: "post",
                  encType: "application/json",
                  action: `/countries/${country.name.common}`,
                }
              );
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
