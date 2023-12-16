import { useQuery } from "@tanstack/react-query";

import { fetchCountries } from "../util/http";
import { useState } from "react";
import LoadingIndicator1 from "../UI/LoadingIndicator1";
import Error from "../UI/error";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import GridViewIcon from "@mui/icons-material/GridView";
import TocIcon from "@mui/icons-material/Toc";
import Grid from "@mui/material/Grid";
import CountryTable from "./CountryTable";
import CountryNotFound from "./CountryNotFound";
import CountryList from "./CountryList";

const Countries = ({ searchContent }) => {
  const [tableView, setTableView] = useState(false);
  const changeViewHandler = () => {
    setTableView(!tableView);
  };
  // const [searchContent, setSearchContent] = useState({
  //   term: term,
  //   value: value,
  // });
  // const searchDataHandler = (searchData) => {
  //   setSearchContent({ term: searchData.term, value: searchData.criteria });
  // };

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
    if (data.status === 404) content = <CountryNotFound />;
    else {
      content = (
        <main>
          <Grid container justifyContent="center" sx={{ margin: 3 }}>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                startIcon={<TocIcon />}
                disabled={tableView}
                onClick={changeViewHandler}
              >
                Table View
              </Button>
              <Button
                variant="contained"
                startIcon={<GridViewIcon />}
                disabled={!tableView}
                onClick={changeViewHandler}
              >
                Grid View
              </Button>
            </Stack>
          </Grid>
          {tableView && <CountryTable countries={data} />}
          {!tableView && <CountryList countries={data} />}
        </main>
      );
    }
  }

  return <>{content}</>;
};

export default Countries;
