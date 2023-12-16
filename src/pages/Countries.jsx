import React from "react";
import { useEffect, useState } from "react";
import Countries from "../components/home/Countries";
import { useParams } from "react-router-dom";

export default function CountriesPage() {
  const { term, value } = useParams();
  const [searchContent, setSearchContent] = useState();
  useEffect(() => {
    setSearchContent({ term, value });
  }, [term, value]);
  return <Countries searchContent={searchContent} />;
}
