import React, { useEffect, useState } from "react";
import "./Recipe.css";

import "./App.css";
// import { URL } from "../URL";

function App() {
  return (
    <div className="App">
      <Recipe />
    </div>
  );
}

export default App;

export const Recipe = () => {
  return (
    <div className="recipe-container">
      <RecipeList />
    </div>
  );
};

const RecipeList = () => {
  const [recipe, setRecipe] = useState([]);

  // const getRecipe = () => {
  //   async function Allrecipe() {
  //     const data = await fetch("https://itis-lebowski-recipe.herokuapp.com/recipes");
  //     const allData = await data.json();
  //     console.log(allData);
  //     setRecipe(allData)
  //   }
  //   Allrecipe();
  // };

  useEffect(() => {
    fetch("https://itis-lebowski-recipe.herokuapp.com/recipes")
      .then((data) => data.json())
      .then((recipe) => setRecipe(recipe));
  }, []);
  
  return (
    <>
      {recipe.map((val, index) => (
        <div className="recipe" key={index}>
          <img className="recipe-poster" src={val.poster} alt={val.name} />
          <p className="recipe-name">{val.name}</p>
        </div>
      ))}
    </>
  );
};
