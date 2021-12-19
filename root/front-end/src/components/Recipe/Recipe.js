import React, { Fragment } from "react";
import { RecipeList } from "./RecipeList";
import { RecipeSummary } from "./RecipeSummary";


export const Recipe = () => {
  return (
    <Fragment>
      <RecipeSummary />
      <RecipeList />
    </Fragment>
  );
};
