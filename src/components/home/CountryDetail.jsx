import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { Grid, Stack } from "@mui/material";

const CountryDetail = () => {
  const data = useActionData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const country = data.data;
  const aspectRatio = 16 / 9;
  const fixedHeight = 100;
  const fixedWidth = aspectRatio * fixedHeight;
  console.log(country);
  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        textAlign="center"
        margin={5}
        component="div"
      >
        The {country.name.official}
      </Typography>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item>
          <CardMedia
            sx={{ width: fixedWidth, height: fixedHeight }}
            image={country.flags.svg}
            title={country.flags.alt}
          />

          <Typography variant="body2" textAlign="center" margin={3}>
            Flag
          </Typography>
        </Grid>
        <Grid item>
          <CardMedia
            sx={{ width: fixedWidth, height: fixedHeight }}
            image={country.coatOfArms.png}
            title={country.flags.alt}
          />

          <Typography textAlign="center" margin={3} variant="body2">
            Coat of Arms
          </Typography>
        </Grid>
      </Grid>

      <CardContent>
        <Typography gutterBottom component="div">
          Official Name: {country.name.official}
        </Typography>
        <Typography gutterBottom component="div">
          Common Name: {country.name.common}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          {/* {article.published_at} */}
        </Typography>
        {/*
          <Typography variant="subtitle1" color="text.primary">
            Author: {article.author}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.content}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Source: {article.source}
          </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button
          size="small"
          onClick={() => {
            window.open(article.url, "_blank");
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </>
  );
};
export default CountryDetail;
