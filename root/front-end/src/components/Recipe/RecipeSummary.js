import classes from "./RecipeSummary.module.css";
import Card from './../UI/Card';

export const RecipeSummary = () => {
  return (
    <Card className={classes.summary}>
      <h2>Delicious Food To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner. All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};
