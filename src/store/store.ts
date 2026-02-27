import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
// routing state moved out of Redux; use react-router v6 hooks in components
import { articleReducer } from '../pages/articles/store/reducer';
import articleSagas from '../pages/articles/store/saga';
import { ArticleStateType } from '../pages/articles/types';

export type State = {
    articleReducer: ArticleStateType;
};

export const reducers = combineReducers({
    articleReducer
});

export const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function* rootSaga() {
    yield all([
        // saga functions here
        articleSagas()
    ]);
}

sagaMiddleware.run(rootSaga);
