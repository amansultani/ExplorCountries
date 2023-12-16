import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import CountryDetail, {
  action as CountryDetailAction,
} from "./pages/CountryDetail";
import CountriesPage from "./pages/Countries";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/countries"),
  },
  {
    path: "/countries",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ":term/:value",
        element: <CountriesPage />,
      },
      {
        path: ":countryName",
        element: <CountryDetail />,
        action: CountryDetailAction,
      },
    ],
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
