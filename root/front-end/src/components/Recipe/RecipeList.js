import React, { useEffect, useState } from "react";
import classes from "./RecipeList.module.css";

export const RecipeList = () => {
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
    <section className={classes["recipe-container"]}>
      {recipe.map((val, index) => (
        <div className={classes.recipe} key={index}>
          <img
            className={classes["recipe-poster"]}
            src={val.poster}
            alt={val.name}
          />
          <p className={classes["recipe-name"]}>{val.name}</p>
        </div>
      ))}
    </section>
  );
};
