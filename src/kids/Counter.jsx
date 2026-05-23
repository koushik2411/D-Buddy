import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function Inc() {
    setCount(count + 1);
  }

  function Dec() {
    setCount(count - 1);
  }

  function Double() {
    setCount(count * 2);
  }

  function Square() {
    setCount(count * count);
  }

  function SqRoot() {
    setCount(Math.sqrt(count).toFixed(2));
  }

  function Reset() {
    setCount(0);
  }
  
  return (
    <div className=" p-3 pt-30 min-h-screen flex items-start justify-center bg-slate-200 dark:bg-black/40 dark:text-slate-100">

      <div className=" p-4 w-full max-w-170 flex flex-col items-center justify-center gap-5 border rounded-xl bg-slate-300 dark:bg-slate-800">

        <h1 className=" text-2xl font-semibold border-b-2 dark:text-slate-200">COUNTER</h1>

        <div className=" p-2 w-full flex flex-col items-center gap-7">
          <div className=" w-full p-3 text-3xl font-semibold text-end overflow-auto rounded bg-slate-100">
            <h1 className={`${count < 0 ? "text-red-500" : "text-blue-600"}`}>{count}</h1>
          </div>

          <div className=" w-full grid grid-cols-3 md:grid-cols-6 justify-items-center gap-y-7">
            <button
              onClick={Inc}
              className="counterBtns"
            >
              +
            </button>
            <button
              onClick={Dec}
              className="counterBtns"
            >
              -
            </button>
            <button
              onClick={Double}
              className="counterBtns"
            >
              2x
            </button>
            <button
              onClick={Square}
              className="counterBtns"
            >
              x<sup>2</sup>
            </button>
            <button
              onClick={SqRoot}
              className="counterBtns"
            >
              &radic;x
            </button>
            <button
              onClick={Reset}
              className="counterBtns"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
