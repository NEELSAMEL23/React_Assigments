import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';
import { actionTypeLogger, payloadLogger } from './middlewares';

const store = configureStore({
  reducer: counterReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(actionTypeLogger, payloadLogger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
