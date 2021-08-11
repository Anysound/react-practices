import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    case "decrement":
      return {
        count: state.count - 1,
      };

    case "reset":
      return {
        count: 0,
      };
  }
}

export default function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });

  function increment() {
    dispatch({type: 'increment'})
  }

  function decrement() {
    dispatch({type: 'decrement'})
  }

  function reset() {
    dispatch({type: 'reset'})
  }

  return (
    <div>
      <p>count: {state.count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
