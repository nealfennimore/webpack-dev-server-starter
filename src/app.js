import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import createStore from './store';
import rootSaga from './global/sagas';

import Home from './pages/home';

const store = createStore();
store.runSaga( rootSaga );

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    </Provider>
);

export default App;
