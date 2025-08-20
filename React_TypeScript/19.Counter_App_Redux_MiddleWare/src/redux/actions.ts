export const INCREMENT = 'INCREMENT' as const;
export const DECREMENT = 'DECREMENT' as const;

interface IncrementAction {
  type: typeof INCREMENT;
  payload: number;
}

interface DecrementAction {
  type: typeof DECREMENT;
  payload: number;
}

export type CounterAction = IncrementAction | DecrementAction;

export const increment = (value: number): IncrementAction => ({
  type: INCREMENT,
  payload: value,
});

export const decrement = (value: number): DecrementAction => ({
  type: DECREMENT,
  payload: value,
});
