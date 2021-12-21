import { Fragment } from "react";
import MealImage from "../../asset/background-img.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Order Your Food</h2>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImage} alt="Food We got" />
      </div>
    </Fragment>
  );
};

export default Header;
