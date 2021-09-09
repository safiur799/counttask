import React from "react";
import { useState } from "react";
export default function Task() {
  const [count, setCount] = useState(1);
  const clickHandler = (val) => {
    let temp = count + val;
    setCount(temp);
  };
  const clickHandlerMul = (val) => {
    let temp = count * 2;
    setCount(temp);
  };
  return (
    <div>
      <h2 className="d-flex align-items-center justify-content-center mt-3">
        {count}
      </h2>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => {
          clickHandler(1);
        }}
      >
        increment
      </button>
      <button
        type="button"
        class="btn btn-secondary mx-2"
        onClick={() => {
          clickHandler(-1);
        }}
      >
        decreament
      </button>
      <button
        type="button"
        class="btn btn-success mx-2"
        onClick={() => {
          clickHandlerMul(2);
        }}
      >
        multiplication
      </button>
    </div>
  );
}
