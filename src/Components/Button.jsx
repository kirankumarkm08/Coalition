import React from "react";

const Button = ({ Children }) => {
  return (
    <div>
      <button>{Children}</button>
    </div>
  );
};

export default Button;
