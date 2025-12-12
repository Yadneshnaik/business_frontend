import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FooterComp from "./components/FooterComp";
import About from "./pages/About";
import WebDevPlans from "./pages/WebDevPlans";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/webdev" element={<WebDevPlans />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
}
