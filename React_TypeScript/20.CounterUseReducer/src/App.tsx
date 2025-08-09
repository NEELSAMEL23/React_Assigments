import React, { useReducer } from 'react';

interface State {
  counter: number;
}

type Action =
  | { type: 'Increment'; value: number }
  | { type: 'Decrement'; value: number }
  | { type: 'RESET' };

const initialState: State = {
  counter: 0,
};

const reducer = (currentState: State, action: Action): State => {
  switch (action.type) {
    case 'Increment':
      return { counter: currentState.counter + action.value };
    case 'Decrement':
      return { counter: currentState.counter - action.value };
    case 'RESET':
      return initialState;
    default:
      return currentState;  // make sure to return currentState here
  }
};

const App: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='flex justify-center h-screen items-center flex-col'>
      <h2>Count: {count.counter}</h2>
      <div className='flex gap-2 '>
        <button
          onClick={() => dispatch({ type: 'Increment', value: 1 })}
          className='bg-amber-200 m-2 p-2 rounded-2xl cursor-pointer'
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'Decrement', value: 2 })}
          className='bg-amber-200 m-2 p-2 rounded-2xl cursor-pointer'
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className='bg-amber-200 m-2 p-2 rounded-2xl cursor-pointer'
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
