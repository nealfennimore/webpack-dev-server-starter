import { call } from 'redux-saga/effects';

export default function* main() {
    yield call( [console, 'log'], 'Sagas started' );
}
