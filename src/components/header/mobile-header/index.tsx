import React, { FC, useEffect, useState } from 'react';
import { useScroll } from '../../../hooks/useScroll';
import styles from './styles.module.scss';
import GitHubLight from '../../../images/github_light.svg';
import BracketLeft from '../../../images/bracket_left_light_theme.png';
import BracketRight from '../../../images/bracket_right_light_theme.png';
import { useHistory } from 'react-router-dom';

const MobileHeader: FC = ({ children }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [memo, setMemo] = useState<boolean>(false);
    const [animation, setAnimation] = useState<string>('');
    const [blockScroll, allowScroll] = useScroll();
    const history = useHistory();

    history.listen(() => setOpenMenu(false));

    const launchHideAnimation = () => {
        setAnimation(styles.menuOut);
        setTimeout(() => {
            setAnimation('');
        }, 300);
    };

    useEffect(() => {
        if (openMenu !== memo) {
            if (openMenu) {
                blockScroll();
                setAnimation(styles.menuIn);
            } else {
                launchHideAnimation();
                allowScroll();
            }
            setMemo(openMenu);
        }
    }, [openMenu]);

    return (
        <>
            <div>
                <div
                    className={styles.menuBtn}
                    onClick={() => {
                        setOpenMenu(!openMenu);
                    }}
                >
                    <img src={BracketLeft} alt='bracket image' />
                    <div className={styles.menuBtnText}>
                        <span className={openMenu ? styles.bracket : styles.bracketHide}>Close</span>
                        <span className={openMenu ? styles.bracketHide : styles.bracket}>Open</span>
                    </div>
                    <img src={BracketRight} alt='bracket image' />
                </div>

                <div className={`${styles.menuContainer} ${animation}`}>
                    <ul className={styles.menu}>
                        {children}

                        <li>
                            <div className={styles.iconContainer}>
                                <a href={process.env.REACT_APP_GITHUB_URL} rel='noopener noreferrer' target={'_blank'}>
                                    <img className={styles.icon} src={GitHubLight} alt='github icon' />
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileHeader;
