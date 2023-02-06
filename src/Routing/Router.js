import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { routes } from "../utils/routes";
import About from "../pages/About";
// import Contact from "../views/Contact";
import Portfolio from "../pages/Portfolio";
import Navigation from "../components/nav";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path={routes.home} element={<Home />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.portfolio} element={<Portfolio />} />
        {/* <Route path={routes.contact} element={<Contact />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
