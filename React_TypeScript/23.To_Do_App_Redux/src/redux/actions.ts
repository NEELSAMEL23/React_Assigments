export const ADD_TODO = "ADD_TODO" as const;
export const TOGGLE_TODO = "TOGGLE_TODO" as const;
export const DELETE_TODO = "DELETE_TODO" as const;

export interface Todo {
  id: number;
  title: string;
  status: boolean;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

export type TodoAction = AddTodoAction | ToggleTodoAction | DeleteTodoAction;

export const addTodo = (title: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: { id: Date.now(), title, status: false },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: id,
});
