import { useReducer } from "react";

interface State {
  firstCounter: number;
  secondCounter: number;
}

interface Action {
  type;
  value;
}

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "incrementFirst":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrementFirst":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "resetFirst":
      return { ...state, firstCounter: initialState.firstCounter };
    case "incrementSecond":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrementSecond":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "resetSecond":
      return { ...state, secondCounter: initialState.secondCounter };
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>CounterTwo</h1>
      <h2>firstCounter - {count.firstCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "incrementFirst", value: 1 })}>
          Increment First
        </button>
        <button onClick={() => dispatch({ type: "decrementFirst", value: 1 })}>
          Decrement First
        </button>
        <button onClick={() => dispatch({ type: "resetFirst", value: 0 })}>
          Reset First
        </button>
      </div>
      <h2>secondCounter - {count.secondCounter}</h2>
      <div>
        <button onClick={() => dispatch({ type: "incrementSecond", value: 1 })}>
          Increment Second
        </button>
        <button onClick={() => dispatch({ type: "decrementSecond", value: 1 })}>
          Decrement Second
        </button>
        <button onClick={() => dispatch({ type: "resetSecond", value: 0 })}>
          Reset Second
        </button>
      </div>
    </>
  );
}

export default CounterTwo;