import React from 'react';
import Hero from "./Hero";
import About from "./About";
import CryptoTables from "./CtyproTables";
import Steps from "./Steps";
import Secure from "./Secure";
import Portfolio from "./Portfolio";
import Accordion from "./Accordion";
import Trade from "./Trade";

function HomePage() {
  return (
    <>
        <Hero />
        <About />
        <CryptoTables />
        <Steps />
        <Secure />
        <Portfolio />
        <Accordion />
        <Trade />
    </>
  )
}

export default HomePage