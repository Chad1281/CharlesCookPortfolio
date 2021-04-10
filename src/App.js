import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Links from "./components/Links";
import About from "./components/About";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Links />
      <About />
      <Footer />
    </>
  );
}

export default App;
