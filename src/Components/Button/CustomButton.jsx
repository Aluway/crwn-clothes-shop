import React from "react";

import "./CustomButton.scss";

function CutstomButton(props) {
  return (
    <button
      type={props.buttonType}
      onClick={props.handleClick}
      className={`button ${props.buttonClassname}`}
    >
      {props.children}
    </button>
  );
}

export default CutstomButton;
