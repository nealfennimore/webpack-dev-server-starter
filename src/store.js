/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */

import { applyMiddleware, createStore } from 'redux';
import { isBrowser } from './env';
import createReducer from './global/reducers';
import defaultMiddleware, { composeEnhancers, sagaMiddleware } from './middleware';

/**
 * StoreFactory
 * Creates a new Store instance
 *
 * @export
 * @param {any} args
 * @returns
 */
export function StoreFactory(
    initialState = {},
    initialReducers = createReducer,
    middleware = defaultMiddleware,
) {
    const store = createStore(
        initialReducers( {} ),
        initialState,
        composeEnhancers(
            applyMiddleware( ...middleware() ),
        ),
    );

    store.runSaga = sagaMiddleware.run;

    return store;
}

/**
 * Store for the browser -
 * Cached in order to not recreate.
 * Server store needs to be recreated on every request.
 */
let _BROWSER_STORE;

/**
 * Create Store instance or use browser cached
 * if already created
 *
 * @export
 * @param {any} args
 * @returns Store Instance
 */
export default function configureStore( ...args ) {
    const store = _BROWSER_STORE || StoreFactory( ...args );

    if ( isBrowser ) {
        _BROWSER_STORE = store;
    }

    return store;
}
