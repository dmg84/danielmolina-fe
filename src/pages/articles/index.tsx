import React, { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import Article from '../../components/article/index';
import { ArticleType } from './articlesTypes';
import { GetArticlesReducer } from './store/reducer';
import { useDispatch } from 'react-redux';
import { getArticlesRequest } from './store/actions';

const Articles: FC = () => {
    const dispatch = useDispatch();
    const articles: ArticleType[] = GetArticlesReducer();

    useEffect(() => {
        if (!articles.length) {
            dispatch(getArticlesRequest());
        }
    }, [articles.length, dispatch]);

    return (
        <div className={styles.base}>
            <div className={`${styles.container} ${styles.customContainer}`}>
                <div className={styles.specialContainer}>
                    <h1 className={styles.specialText}>Full Stack</h1>
                    <h1 className={`${styles.specialText} ${styles.moreGiant}`}>Developer</h1>
                </div>
            </div>

            <div className={styles.articles}>
                {articles.map((article: ArticleType, key: number) => {
                    return <Article key={key} article={article} />;
                })}
            </div>
        </div>
    );
};

export default Articles;
