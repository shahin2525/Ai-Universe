import React from "react";

const Button = ({ children }) => {
  return (
    <div className="text-center my-3">
      <button className="btn btn-secondary">{children}</button>
    </div>
  );
};

export default Button;
