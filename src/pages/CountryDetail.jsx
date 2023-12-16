import React from "react";
import CountryDetail from "../components/home/CountryDetail";
import { useActionData, useParams } from "react-router-dom";
import LoadingIndicator2 from "../components/UI/LoadingIndicator2";
import { useQuery } from "@tanstack/react-query";
import { fetchCountries } from "../components/util/http";
import Error from "../components/UI/error";

export default function CountryDetailPage() {
  let content = <LoadingIndicator2 />;
  const countryData = useActionData();
  if (countryData) {
    content = <CountryDetail country={countryData.data} />;
  } else {
    const { countryName } = useParams();
    const searchContent = { term: "name", value: countryName };

    const { data, isPending, isError, error } = useQuery({
      queryKey: ["country", { search: searchContent }],
      queryFn: ({ signal }) =>
        fetchCountries({ signal, content: searchContent }),
    });
    if (error) {
      content = <CountryDetail country={false} />;
    }
    if (data) {
      content = <CountryDetail country={data[0]} />;
    }
  }

  return content;
}

export async function action({ request, params }) {
  const data = await request.json();
  return data;
}
