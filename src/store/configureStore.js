import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk';


export default function configureStore(initialState ) {
    const logger = createLogger({
        level: 'log'
    });

    const store = createStore(rootReducer, initialState, applyMiddleware(thunk, logger) );

    if(module.hot){
        module.hot.accept('../reducers', () => {
            const  nextRootReducer = require ('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    console.log(' configStore: ' + JSON.stringify(store));
    return store;
}
