import type { Middleware } from 'redux';

export const actionTypeLogger: Middleware = (_store) => (next) => (action: unknown) => {
  if (typeof action === 'object' && action !== null && 'type' in action) {
    console.log('Dispatching action type:', (action as { type: unknown }).type);
  }
  return next(action);
};

export const payloadLogger: Middleware = (_store) => (next) => (action: unknown) => {
  if (typeof action === 'object' && action !== null && 'payload' in action) {
    console.log('Action payload:', (action as { payload: unknown }).payload);
  }
  return next(action);
};
