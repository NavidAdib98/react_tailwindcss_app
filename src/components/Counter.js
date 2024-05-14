import React from "react";
import { useState } from "react";

const Counter = ({ name }) => {
  const [number, setNumber] = useState(0);

  const addHandler = () => {
    setNumber((prevNum) => prevNum + 1);
  };
  const decHandler = () => {
    setNumber((prevNum) => prevNum - 1);
  };
  return (
    <div className=" border-2 border-slate-800 w-28">
      <h1>{name}</h1>
      <div>Counter: {number}</div>
      <section className=" flex flex-row justify-center gap-2">
        <button onClick={addHandler}>+</button>
        <button onClick={decHandler}>-</button>
      </section>
    </div>
  );
};

export default Counter;
