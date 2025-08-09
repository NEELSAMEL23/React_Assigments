import React, { useState } from 'react';

const CounterHook: React.FC = () => {
    const [count, setCount] = useState<number>(0); // Explicit type

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default CounterHook;
