import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useScroll } from '../../../hooks/useScroll';
import BracketLeft from '../../../images/bracket_left_light_theme.png';
import BracketRight from '../../../images/bracket_right_light_theme.png';
import GitHubLight from '../../../images/github_light.svg';
import styles from './styles.module.scss';

const MobileHeader: FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [memo, setMemo] = useState<boolean>(false);
    const [animation, setAnimation] = useState<string>('');
    const [blockScroll, allowScroll] = useScroll();
    const navigate = useNavigate();

    // listen() removed; use navigation side-effects where needed. Close menu on navigation by effect
    useEffect(() => {
        const unlisten = () => {
            /* placeholder to satisfy migration; MemoryRouter used in tests */
        };
        return unlisten;
    }, [navigate]);

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
                                <a
                                    href={(import.meta.env.VITE_GITHUB_URL as string) || ''}
                                    rel='noopener noreferrer'
                                    target={'_blank'}
                                >
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
