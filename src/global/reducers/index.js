import { combineReducers } from 'redux';

function example( state = {}, action ) {
    switch ( action.type ) {
    default:
        return state;
    }
}

export default () => combineReducers( {
    example,
} );
