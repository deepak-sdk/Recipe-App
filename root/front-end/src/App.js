import React, { Fragment } from "react";
import "./App.css";
import { Recipe } from "./components/Recipe/Recipe";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment className="App">
      <Header />
      <main>
        <Recipe />
      </main>
    </Fragment>
  );
}

export default App;
