import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";

export default function HomePage() {
  return (
    <main>
      <Container maxWidth="lg" style={{ marginTop: "2rem" }}>
        <Paper elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Explore Countries
          </Typography>
          <Typography variant="body1" paragraph>
            Explore Countries is a React application that allows you to explore detailed information about countries around the world. You can search for countries based on various criteria, view a list of matching countries, and access detailed information about each country.
          </Typography>

          <Grid container spacing={4} style={{ marginTop: "2rem" }}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={2} style={{ padding: "1rem" }}>
                <Typography variant="h6" gutterBottom>
                  Search
                </Typography>
                <Typography variant="body2">
                  Easily search for countries based on specific criteria such as name, region, or language.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={2} style={{ padding: "1rem" }}>
                <Typography variant="h6" gutterBottom>
                  List View
                </Typography>
                <Typography variant="body2">
                  View a comprehensive list of countries based on your search criteria, with quick access to basic details.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={2} style={{ padding: "1rem" }}>
                <Typography variant="h6" gutterBottom>
                  Detail View
                </Typography>
                <Typography variant="body2">
                  Click on any country to see in-depth information including population, area, languages, and more.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={2} style={{ padding: "1rem" }}>
                <Typography variant="h6" gutterBottom>
                  Sorting
                </Typography>
                <Typography variant="body2">
                  Sort the list of countries based on factors like population, area, and other relevant metrics.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </main>
  );
}
