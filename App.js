import React from 'react';
import GameBoard from './components/GameBoard';
import { Provider } from 'react-redux';
import store from './redux/storejca'

export default function App() {
  return (
      <Provider store={store}>
          <GameBoard/>
      </Provider>
  );
}


