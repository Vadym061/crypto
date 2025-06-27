import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import HomePage from "../pages/Home/components/HomePage";

function MainLayouts() {
  return (
    <>
      <Header />
      <main className="main">
         <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default MainLayouts;
