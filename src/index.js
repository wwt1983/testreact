import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import ReactDOM from 'react-dom';
import './styles/app.css';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <div>
        <App/>
    </div>
    </Provider>,
    document.getElementById('root')
);
