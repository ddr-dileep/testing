import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import MainContent from "./components/Main";
import TestArrow from "./components/TextArrow";
import { DND } from "./test/dnd";
import TestTable from "./components/TestTable";
import PaginatedItems from "./components/Textpagination";
import IntervalComponent from "./components/Test";

function App() {
  return (
    <div className="main-app">
      {/* <Navigation />
      <Header />
      <MainContent /> */}
      {/* <TestArrow /> */}
      {/* <DND /> */}
      {/* <TestTable /> */}
      {/* <PaginatedItems /> */}
      <IntervalComponent />
    </div>
  );
}

export default App;
