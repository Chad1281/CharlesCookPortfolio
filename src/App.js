import React from "react";
import './App.css';
import Header from "./components/Header";
import Links from "./components/Links";
import About from "./components/About";
import ProjectCards from "./components/ProjectCards";
import ResumeCard from "./components/ResumeCard";
import Footer from "./components/Footer";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <>
      <Header />
      <Links />
      <About />
      <ProjectCards />
      <ResumeCard />
      <ContactCard />
      <Footer />
    </>
  );
}

export default App;
