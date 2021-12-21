import React, { useRef, useState } from "react";
import classes from "./RecipeForm.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

const RecipeForm = (props) => {
  const [validAmount, setValidAmount] = useState(true);
  const inputAmountRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setValidAmount(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber, props.id);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmountRef}
        label="Quantity"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button className={classes.button} type="submit">Add to cart</Button>
      {!validAmount && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default RecipeForm;
