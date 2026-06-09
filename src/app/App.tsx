import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect, lazy, Suspense } from "react";

const CofitLanding = lazy(() => import("./components/CofitLanding"));
const ConsultationPage = lazy(() => import("./components/pages/ConsultationPage"));
const PartnersPage = lazy(() => import("./components/pages/PartnersPage"));
const PartnerPathPage = lazy(() => import("./components/pages/PartnerPathPage"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<CofitLanding />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/partners/:slug" element={<PartnerPathPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}