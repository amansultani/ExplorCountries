import React from "react";
import CountryDetail from "../components/home/CountryDetail";

export default function CountryDetailPage() {
  return <CountryDetail />;
}

export async function action({ request, params }) {
  const data = await request.json();
  return data;
}
