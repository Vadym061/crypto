import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Account from '../pages/account/Account';
import TradingPage from "../pages/TradingPage";
import Wallet from "../pages/account/Wallet";

import HomePage from "../pages/Home/components/HomePage";

function MainLayouts() {
  return (
    <>
      <Header />
      <main className="main">
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/account' element={<Account />} />
          <Route path='/wallet' element={<Wallet />} />
          <Route path='/trading' element={<TradingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default MainLayouts;
