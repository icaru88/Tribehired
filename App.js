import React from 'react';
import {createAppContainer} from 'react-navigation';

import {Provider} from 'react-redux';
import configureStore from './App/Store/Store';

import Navigator from './App/Navigation/Navigator';

const AppContainer = createAppContainer(Navigator);

const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppContainer />
    </Provider>
  );
};

export default App;
