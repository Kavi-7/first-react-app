import React from "react";
import AppComponent from "./AppexerComp";
import AppHeader from "./AppHeader";
import AppBody from "./AppBody";
import AppFooter from "./AppFooter";
import "./App.css";

function AppClass() {
  return (
    <div className="App">
      <div className="container pt-10">
        <AppHeader />
        <AppBody />

        <div className="row container">
          <AppComponent />
          <AppComponent />
          <AppComponent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
}

export default AppClass;
