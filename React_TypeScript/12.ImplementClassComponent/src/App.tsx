import React from 'react';
import CounterClass from './CounterClass';
import CounterHook from './CounterHook';

const App: React.FC = () => {
  return (
    <div>
      <CounterHook />
      <CounterClass />
    </div>
  );
};

export default App;
