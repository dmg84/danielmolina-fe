import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from '../store/store';
import { ConnectedRouter } from 'connected-react-router';

export const mount = (ui: JSX.Element): JSX.Element => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>{ui}</ConnectedRouter>
        </Provider>
    );
};
