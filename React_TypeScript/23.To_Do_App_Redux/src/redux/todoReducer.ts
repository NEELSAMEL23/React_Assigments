import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: number;
    title: string;
    status: boolean;
}

type TodoState = Todo[];

const initialState: TodoState = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({ id: Date.now(), title: action.payload, status: false });
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) todo.status = !todo.status;
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
