import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import OfferBanner from "./pages/OfferBanner";
import Contact from "./pages/Contact";
import WebDevPlans from "./pages/WebDevPlans";
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {/* Show only on Home route */}
      {location.pathname === "/" && <OfferBanner />}

      <NavbarComp />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/webdev" element={<WebDevPlans />} />
      </Routes>
      <FooterComp />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
