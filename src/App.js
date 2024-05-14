// components
import Counter from "./components/Counter";

import { useState } from "react";

function App() {
  const [counterList, setCounterList] = useState([
    "counter#1",
    "counter#2",
    "counter#3",
    "counter#4",
  ]);

  const removeHandler = () => {
    setCounterList((prevList) => {
      const temp = prevList.slice(0, -1);
      console.log(temp);
      return temp;
    });
  };

  const counterRemoveHandler = (name) => {
    setCounterList((prevList) => {
      const temp = prevList.filter((p) => p !== name);
      return temp;
    });
  };

  return (
    <section>
      <div className=" bg-slate-200 p-3 flex flex-row gap-2">
        {counterList.map((c) => (
          <div>
            <p
              onClick={() => counterRemoveHandler(c)}
              className=" hover:cursor-pointer"
            >
              delete me
            </p>
            <Counter name={c} />
          </div>
        ))}
      </div>
      <button
        onClick={removeHandler}
        className=" text-white bg-pink-800 p-2 border-2 border-pink-800 rounded-lg"
      >
        remove counter
      </button>
    </section>
  );
}

export default App;
