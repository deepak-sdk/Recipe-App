import React, { Fragment } from "react";
// import { RecipeList } from "./RecipeList";
import { RecipeSummary } from "./RecipeSummary";
import AvailableRecipe from './AvailableRecipe';


export const Recipe = () => {
  return (
    <Fragment>
      <RecipeSummary />
      <AvailableRecipe />
    </Fragment>
  );
};
