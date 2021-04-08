import React, { FC } from 'react';
import Style from './styles.module.scss';
import { useHistory } from 'react-router-dom';
import { ArticleType } from '../../pages/articles/articlesTypes';

type ArticlesType = {
    article: ArticleType;
};

const Article: FC<ArticlesType> = ({ article }) => {
    const history = useHistory();
    const handleClick = (path: string) => {
        history.push(path);
    };

    return (
        <div className={Style.element} onClick={() => handleClick('aaa')}>
            <img src={article.img} alt={article.title} />
            <h4>{article.title}</h4>
            <span>{article.lead}</span>
        </div>
    );
};

export default Article;
