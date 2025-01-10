import { useReducer } from "react";

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [total, totalDispatch] = useReducer(reducer, intialState);
  return (
    <>
      <h1>CounterOne</h1>
      <div>
        <h2>count - {count}</h2>
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>

      <div>
        <h2>total - {total}</h2>
        <button onClick={() => totalDispatch("increment")}>Increment</button>
        <button onClick={() => totalDispatch("decrement")}>Decrement</button>
        <button onClick={() => totalDispatch("reset")}>Reset</button>
      </div>
    </>
  );
}
export default CounterOne;
