import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { ArticleStateType } from '../pages/articles/types';
import { articleReducer } from '../pages/articles/store/reducer';
import articleSagas from '../pages/articles/store/saga';

export const history = createBrowserHistory();

export type State = {
    articleReducer: ArticleStateType;
    router: History;
};

export const reducers = combineReducers({
    router: connectRouter(history),
    articleReducer
});

export const sagaMiddleware = createSagaMiddleware();

export default createStore(
    reducers,
    composeWithDevTools(compose(applyMiddleware(sagaMiddleware, routerMiddleware(history))))
);

function* rootSaga() {
    yield all([
        // saga functions here
        articleSagas()
    ]);
}

sagaMiddleware.run(rootSaga);
