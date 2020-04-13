import React, {useEffect, useState} from 'react';
import styles from './lateralMenuMobile.module.scss';
import {Link, useHistory} from "react-router-dom";
import GitHubLight from "../../images/github_light.svg";

export const LateralMenuMobile = (show) => {
    const history = useHistory();
    const [memo, setMemo] = useState(false);
    const [firstLoad, setFirstLoad] = useState(false);
    const [animation, setAnimation] = useState('');

    useEffect(() => {
        if (!firstLoad) {
            setFirstLoad(true);
        } else if (memo !== show.show) {
            if (show.show === true) {
                setAnimation(styles.menuIn);
            } else {
                setAnimation(styles.menuOut);
            }
            setMemo(show.show);
        }
    }, [show, firstLoad, memo]);

    return (
        <div className={`${styles.menuContainer} ${animation}`}>
            <ul className={styles.menu}>
                <li><Link className={history.location.pathname.includes('aaa') ? styles.active : ''}
                          to={'#'}>About</Link></li>
                <li><Link to={'#'}>Articles</Link></li>
                <li><Link to={'#'}>Works</Link></li>
                <li><Link to={'#'}>Contact</Link></li>
                <li>
                    <div className={styles.iconContainer}>
                        <a href={process.env.REACT_APP_GITHUB_URL}><img className={styles.icon} src={GitHubLight}
                                                                        alt="github icon"/></a>
                    </div>
                </li>
            </ul>
        </div>
    )
};