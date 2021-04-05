import React, {useEffect, useState} from 'react';
import styles from './lateralMenuMobile.module.scss';
import {Link, useHistory} from "react-router-dom";
import GitHubLight from "../../images/github_light.svg";
import {paths} from "../../routes/routes";
import useScroll from "../../hooks/useScroll";

export const LateralMenuMobile = (props) => {
    const history = useHistory();
    const [memo, setMemo] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [animation, setAnimation] = useState('');
    const [blockScroll, allowScroll] = useScroll();

    useEffect(() => {
        if (!firstLoad) {
            setFirstLoad(true);
        } else if (memo !== props.show) {
            if (props.show === true) {
                setAnimation(styles.menuIn);
                blockScroll()
            } else {
                setAnimation(styles.menuOut);
                allowScroll()
            }
            setMemo(props.show);
        }
    }, [props.show, firstLoad, memo]);

    return (
        <div className={`${styles.menuContainer} ${animation}`}>
            <ul className={styles.menu}>
                <li><Link className={history.location.pathname.includes('aaa') ? styles.active : ''}
                          to={'#'}>About</Link></li>
                <li><Link className={history.location.pathname.includes(paths.listArticles) ? styles.active : ''}
                          to={paths.listArticles}>Articles</Link></li>
                <li><Link to={'#'}>Works</Link></li>
                <li><Link to={'#'}>Contact</Link></li>
                <li>
                    <div className={styles.iconContainer}>
                        <a href={process.env.REACT_APP_GITHUB_URL} rel="noopener noreferrer" target={'_blank'}>
                            <img className={styles.icon} src={GitHubLight} alt="github icon"/>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    )
};