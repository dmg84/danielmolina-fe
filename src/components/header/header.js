import React, {useState} from 'react';
import styles from './header.module.scss';
import {Link, useHistory} from 'react-router-dom'
import {useWindowSize} from "../../hooks/useWindowsize";
import BracketLeft from '../../images/bracket_left_light_theme.png';
import BracketRight from '../../images/bracket_right_light_theme.png';
import {paths} from "../../routes/routes";
import {LateralMenuMobile} from "../lateralMobileMenu/lateralMenuMobile";


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const history = useHistory();
    const width = useWindowSize();
    const close = openMenu ? styles.bracket : styles.bracketHide;
    const open = openMenu ? styles.bracketHide : styles.bracket;
    const mobileResolution = 768;

    return (
        <>
            <header className={styles.header}>
                <div className={styles.subHeader}>
                    <Link className={styles.name} to={paths.root}><span
                        className={styles.anthracite}>d</span><span>aniel</span><span
                        className={styles.anthracite}>M</span><span>olina</span></Link>

                    {width > mobileResolution ?
                        <ul className={styles.menu}>
                            <li><Link className={history.location.pathname.includes('aaa') ? styles.active : ''}
                                      to={'#'}>About</Link></li>
                            <li><Link to={'#'}>Articles</Link></li>
                            <li><Link to={'#'}>Works</Link></li>
                            <li><Link to={'#'}>Contact</Link></li>
                        </ul>
                        :
                        <div className={`${styles.menuBtn}`} onClick={() => {
                            setOpenMenu(!openMenu)
                        }}>
                            <img src={BracketLeft} alt=""/>
                            <div className={styles.menuBtnText}>
                                <span className={close}>Close</span>
                                <span className={open}>Open</span>
                            </div>
                            <img src={BracketRight} alt=""/>
                        </div>
                    }
                </div>
            </header>
            <LateralMenuMobile show={openMenu && width <= mobileResolution}/>
        </>
    );
};

export default Header;