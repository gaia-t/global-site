import { createBrowserRouter } from "react-router";
import CofitLanding from "./components/CofitLanding";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CofitLanding,
  },
]);
