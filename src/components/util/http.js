import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();
export async function fetchCountries({ signal, content }) {
  try {
    const { term, value } = content;
    let url = `https://restcountries.com/v3.1/${term}/${value}`;

    const response = await fetch(url, { signal: signal });

    if (!response.ok) {
      const error = new Error("An error occurred while fetching the Result");
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return Promise.reject(error);
  }
}
