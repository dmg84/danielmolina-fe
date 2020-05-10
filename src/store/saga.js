import {call, put, select, takeEvery} from 'redux-saga/effects'
import {actionTypes, getArticlesResponse} from "./actions";
import {getArticles} from "../constants/api.constants";
import {getArticlesIndex} from "./selectors";

const loadArticles = function* () {
    try {
        const articlesIndex = yield select(getArticlesIndex);
        console.log('articlesIndex', articlesIndex);
        const response = yield call(getArticles, articlesIndex);
        yield put(getArticlesResponse(response.results));
    } catch (error) {
        console.error('saga error', error);
    }
};

export const coreSaga = function* () {
    yield takeEvery(actionTypes.getArticlesPaginated, loadArticles);
};