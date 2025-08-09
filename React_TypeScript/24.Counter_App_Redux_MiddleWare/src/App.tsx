import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './components/Counter';

const App: React.FC = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
