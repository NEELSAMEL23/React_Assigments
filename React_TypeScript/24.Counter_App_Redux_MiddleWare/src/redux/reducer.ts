import { INCREMENT, DECREMENT, type CounterAction } from './actions';

interface CounterState {
    count: number;
}

const initialState: CounterState = { count: 0 };

const counterReducer = (
    state: CounterState = initialState,
    action: CounterAction
): CounterState => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + action.payload };
        case DECREMENT:
            return { count: state.count - action.payload };
        default:
            return state;
    }
};

export default counterReducer;
