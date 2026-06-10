import { createBrowserRouter } from "react-router";
import CofitLanding from "./components/CofitLanding";
import ConsultationPage from "./components/pages/ConsultationPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CofitLanding,
  },
  {
    path: "/consultation",
    Component: ConsultationPage,
  },
]);
