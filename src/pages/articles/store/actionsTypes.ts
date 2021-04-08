import { ArticleType } from '../articlesTypes';

export enum ArticlesActionsTypes {
    GET_ARTICLES_REQUEST = '[Articles] get articles request',
    GET_ARTICLES_RESPONSE = '[Articles] get articles response'
}

export type GetArticlesRequest = {
    type: ArticlesActionsTypes.GET_ARTICLES_REQUEST;
};

export type GetArticlesResponse = {
    type: ArticlesActionsTypes.GET_ARTICLES_RESPONSE;
    articles: [ArticleType];
};

export type ArticlesActions = GetArticlesRequest | GetArticlesResponse;
