import React, {useEffect} from 'react';
import Style from './articles.module.scss';
import {useHistory} from 'react-router-dom';
import {useArticlesReducer} from "../../store/reducer";
import {useDispatch} from "react-redux";
import {getArticles} from "../../store/actions";

const Articles = (props) => {
    const history = useHistory();
    const articles = useArticlesReducer();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!articles.length) {
            dispatch(getArticles());
        }
    }, [articles, dispatch]);

    const handleClick = (path) => {
        history.push(path);
    }


    const drawArticles = (items) => {
        return (
            items.map((el, key) => {
                return (
                    <div className={Style.element} key={`${key}-container`} onClick={() => handleClick('dasds')}>
                        <img key={`${key}-img`} src={el.img} alt={el.title}/>
                        <h4 key={`${key}-h4`}>{el.title}</h4>
                        <span key={`${key}-span`}>{el.lead}</span>
                    </div>
                )
            })
        )
    }

    return (
        <div className={Style.container}>
            {drawArticles(props.landing === true ? articles.slice(0, 3) : articles)}
        </div>
    );
};

export default Articles;