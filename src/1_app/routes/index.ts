import { createBrowserRouter } from "react-router";
import App from "../App";
import { SearchPage } from "@/2_pages/search";
import { ResultsPage } from "@/2_pages/results";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: SearchPage },
      { path: "results", Component: ResultsPage },
    ],
  },
]);
