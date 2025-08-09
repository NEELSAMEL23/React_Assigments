// src/redux/usersSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Define Address interface
export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    // Optionally, add geo or other fields if needed
}

// Define User interface with address and phone
export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    address: Address;
    // Add other user fields as needed
}

// Define the slice state type
interface UsersState {
    users: User[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async () => {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
);

const initialState: UsersState = {
    users: [],
    status: 'idle',
    error: null,
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Something went wrong';
            });
    },
});

export default usersSlice.reducer;
