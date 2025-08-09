export const INCREMENT = "INCREMENT" as const;
export const DECREMENT = "DECREMENT" as const;

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterAction = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({ type: INCREMENT });
export const decrement = (): DecrementAction => ({ type: DECREMENT });
