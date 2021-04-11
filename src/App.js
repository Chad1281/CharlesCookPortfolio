import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Links from "./components/Links";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import ResumeCard from "./components/ResumeCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Links />
      <About />
      <ProjectCards />
      <ResumeCard />
      <Footer />
    </>
  );
}

export default App;
