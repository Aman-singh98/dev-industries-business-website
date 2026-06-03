import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Layout from "../components/common/Layout";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import OTTable from "../components/products/OTTable";
import SpareParts from "../components/products/SpareParts";
import OTLight from "../components/products/OTLight";
import Vision from "../pages/Vision";
import ScrollToTop from "../components/common/ScrollToTop";
import NotFound from "../components/common/NotFound";
import PrivacyPolicy from "../components/common/PrivacyPolicy";
import TermsOfService from "../components/common/TermsOfService";
import Actuator from "../components/products/Actuator";

function AppRoutes() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/ot-table" element={<OTTable />} />
        <Route path="/products/ot-light" element={<OTLight />} />
        <Route path="/products/spare-parts" element={<SpareParts />} />
        <Route path="/products/linkan-handset" element={<Actuator/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
<Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default AppRoutes;