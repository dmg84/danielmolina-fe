import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArticleType } from '../../pages/articles/types';
import Style from './styles.module.scss';

type ArticlesType = {
    article: ArticleType;
};

const Article: FC<ArticlesType> = ({ article }) => {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
        navigate(path);
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
