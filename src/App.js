import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
// import Nodemailer from 'nodemailer';

import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe";
import Resume from "./components/Resume/Resume";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { ThemeContext } from "./ThemeProvider";

const App = () => {
const {theme} = useContext(ThemeContext);  

  return (
    <>
     <Helmet>
     <html lang="en" data-theme={theme} />
   </Helmet>
    <Navbar />
    <AboutMe />
    <Portfolio />
    <Resume />
    <Contact />
    <Footer />

 </>
  );
};

export default App;
