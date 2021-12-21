import React, { useState, useEffect } from "react";
import { RecipeList } from "./RecipeList";
// import Card from "../UI/Card";
import classes from "./AvailableRecipe.module.css";

const AvailableRecipe = () => {
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
    fetch("https://61bf193cb25c3a00173f4c77.mockapi.io/recipe", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((recipe) => setRecipe(recipe));
  }, []);

  const recipeLists = recipe.map((val) => (
    <RecipeList
      key={val.id}
      name={val.name}
      id={val.id}
      description={val.description}
      amount={val.amount}
      poster={val.poster}
      price={val.price}
    />
  ));
  return (
    <section className={classes["recipe-container"]}>{recipeLists}</section>
  );
};
export default AvailableRecipe;
