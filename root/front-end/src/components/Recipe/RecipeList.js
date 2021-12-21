import React, { useContext } from "react";
import classes from "./RecipeList.module.css";
import RecipeForm from "./RecipeForm/RecipeForm";
import CartContext from "../../context/cart-context";
import Card from "./../UI/Card";

export const RecipeList = (props) => {
  const cartCtx = useContext(CartContext);

  // const [recipe, setRecipe] = useState([]);

  // // const getRecipe = () => {
  // //   async function Allrecipe() {
  // //     const data = await fetch("https://itis-lebowski-recipe.herokuapp.com/recipes");
  // //     const allData = await data.json();
  // //     console.log(allData);
  // //     setRecipe(allData)
  // //   }
  // //   Allrecipe();
  // // };
  // useEffect(() => {
  //   fetch("https://61bf193cb25c3a00173f4c77.mockapi.io/recipe")
  //     .then((data) => data.json())
  //     .then((recipe) => setRecipe(recipe));
  // }, []);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <section >
      <Card className={classes.recipe}>
        <img
          className={classes["recipe-poster"]}
          src={props.poster}
          alt={props.name}
        />
        <div className={classes["recipe-summary"]}>
          <h3 className={classes["recipe-description"]}>{props.description}</h3>
        </div>

        <div className={classes["recipe-details"]}>
          <p className={classes["recipe-name-price"]}>
            {props.name}- ₹ {props.price}
          </p>
        </div>
        <RecipeForm onAddToCart={addToCartHandler} />
      </Card>
    </section>
  );
};
