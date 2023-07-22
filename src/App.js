import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nodemailer from 'nodemailer';
import { Box } from "@chakra-ui/react";

import AboutMe from "./components/pages/AboutMe";
import Footer from "./components/Footer";
import Layout from "./components/Layout";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
