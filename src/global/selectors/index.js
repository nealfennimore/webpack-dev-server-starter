import { createSelector } from 'reselect';

const getSlice = ( state ) => state;

export const getExample = createSelector( getSlice, ( state ) => state.example );
