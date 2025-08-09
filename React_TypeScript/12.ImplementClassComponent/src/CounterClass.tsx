import React from 'react';

interface CounterClassState {
    count: number;
}

class CounterClass extends React.Component<{}, CounterClassState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            count: 0 // same as useState(0)
        };
    }

    increment = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default CounterClass;
