import React from "react";

function Button({ text, disabled }) {
  return (
    <button className="btn btn-primary btn-sm md:btn-md" disabled={disabled}>
      {disabled && <span className="loading loading-spinner loading-md"></span>}
      {text}
    </button>
  );
}

export default Button;
