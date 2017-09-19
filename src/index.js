import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);
