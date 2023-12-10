import SearchBar from "./Searchbar";
import { useQuery } from "@tanstack/react-query";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { fetchCountries } from "../util/http";
import { useState } from "react";
import LoadingIndicator1 from "../UI/LoadingIndicator1";
import Error from "../UI/error";
import Country from "./Country";
import CountryTable from "./CountryTable";

const Home = () => {
  const [searchContent, setSearchContent] = useState({
    term: "region",
    value: "Europe",
  });
  const searchDataHandler = (searchData) => {
    setSearchContent({ term: searchData.term, value: searchData.criteria });
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["countries", { search: searchContent }],
    queryFn: ({ signal }) => fetchCountries({ signal, content: searchContent }),
  });

  let content = "";

  if (isPending) content = <LoadingIndicator1 />;
  if (isError) {
    content = <Error error={error} />;
  }
  if (!isError && !isPending) {
    content = <CountryTable countries={data} />;
    // content = (
    //   <Grid
    //     container
    //     spacing={4}
    //     marginTop={3}
    //     key={"countries"}
    //     justifyContent="space-around"
    //   >
    //     {data.map((country) => {
    //       return <Country key={country.name.official} country={country} />;
    //     })}
    //   </Grid>
    // );
  }

  return (
    <>
      <SearchBar searchData={searchDataHandler} />

      {content}
    </>
  );
};

export default Home;
