import { SagaIterator } from 'redux-saga';
import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';
import { getArticles } from '../api';
import { getArticlesResponse } from './actions';
import { ArticlesActionsTypes } from './actionsTypes';

export function* fetchArticlesEffect(): SagaIterator {
    try {
        const articles = yield call(getArticles);
        yield put(getArticlesResponse(articles));
    } catch (e) {
        console.error(e);
    }
}

function* articleSagas(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(ArticlesActionsTypes.GET_ARTICLES_REQUEST, fetchArticlesEffect);
}

export default articleSagas;
