import { INCREMENT, DECREMENT, type CounterAction } from "./actions";

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
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
