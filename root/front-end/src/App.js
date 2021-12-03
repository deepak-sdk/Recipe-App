import React from "react";
import "./Recipe.css";

import "./App.css";

const INITIAL_RECIPES = [
  {
    name: "Briyani",
    poster:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani-600x600.jpg",
  },
  {
    name: "Idly",
    poster:
      "https://3.bp.blogspot.com/-xmovZJdPYYo/Us3G1iDeO8I/AAAAAAAAEf4/z-V-0eYTBTA/w1200-h630-p-k-no-nu/9.jpg",
  },
  {
    name: "Fish Curry",
    poster:
      "https://i.pinimg.com/originals/75/75/0c/75750c8c2ab9f7e79ff776c7d70776bb.jpg",
  },
  {
    name: "Pallipayalam Chicken",
    poster:
      "https://www.kannammacooks.com/wp-content/uploads/Tamilnadu-Erode-Pallipalayam-Chicken-masala-Fry-Recipe.jpg",
  },
  {
    name: "Curd rice",
    poster:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2.jpg",
  },
  {
    name: "Chettinad Chicken",
    poster:
      "https://www.bestindiancooking.com/wp-content/uploads/bfi_thumb/malavedathykozhy-1-nqavv2zh6jldvonh9wrp0wz091ifulem2luy0u1ac6.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Recipe recipe={INITIAL_RECIPES} />
    </div>
  );
}

export default App;

export const Recipe = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <RecipeList recipe={recipe} />
    </div>
  );
};

const RecipeList = ({ recipe }) => {
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
