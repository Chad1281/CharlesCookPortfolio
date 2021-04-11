import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Links from "./components/Links";
import About from "./components/About";
import CardContainer from "./components/Cards";
import CardsWrapper from "./components/Cards";
import CardUrl from "./components/Cards";
import Card from "./components/Cards";
import CardTitle from "./components/Cards";
import CardDesc from "./components/Cards";
import Footer from "./components/Footer";
import ProjectCards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      <Links />
      <About />
      {/* <CardContainer>
        <CardsWrapper custId={"projectCards"}>
          <CardUrl>
            <Card>
              <CardTitle></CardTitle>
              <CardDesc></CardDesc>              
            </Card>
          </CardUrl>          
        </CardsWrapper>
      </CardContainer> */}
      <ProjectCards />
      <Footer />
    </>
  );
}

export default App;
