import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.className}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {" "}
      {props.children}
    </button>
  );
};

export default Button;
