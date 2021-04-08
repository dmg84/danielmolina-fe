import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Link, useHistory } from 'react-router-dom';
import GitHubLight from '../../images/github_light.svg';
import { paths } from '../../routes/routes';
import { useScroll } from '../../hooks/useScroll';

type LateralMenuType = {
    show: boolean;
};

export const LateralMenuMobile: FC<LateralMenuType> = ({ show }) => {
    const history = useHistory();
    const [memo, setMemo] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [animation, setAnimation] = useState('');
    const [blockScroll, allowScroll] = useScroll();

    useEffect(() => {
        if (!firstLoad) {
            setFirstLoad(true);
        } else if (memo !== show) {
            if (show === true) {
                setAnimation(styles.menuIn);
                blockScroll();
            } else {
                setAnimation(styles.menuOut);
                allowScroll();
            }
            setMemo(show);
        }
    }, [show, firstLoad, memo, allowScroll, blockScroll, setAnimation]);

    return (
        <div className={`${styles.menuContainer} ${animation}`}>
            <ul className={styles.menu}>
                <li>
                    <Link className={history.location.pathname.includes('aaa') ? styles.active : ''} to={'#'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        className={history.location.pathname.includes(paths.listArticles) ? styles.active : ''}
                        to={paths.listArticles}
                    >
                        Articles
                    </Link>
                </li>
                <li>
                    <Link to={'#'}>Works</Link>
                </li>
                <li>
                    <Link to={'#'}>Contact</Link>
                </li>
                <li>
                    <div className={styles.iconContainer}>
                        <a href={process.env.REACT_APP_GITHUB_URL} rel='noopener noreferrer' target={'_blank'}>
                            <img className={styles.icon} src={GitHubLight} alt='github icon' />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
};
