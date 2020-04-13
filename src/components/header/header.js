import React, {useEffect, useState} from 'react';
import styles from './header.module.scss';
import {Link, useHistory} from 'react-router-dom'
import {Collapse} from 'react-burgers'
import {useWindowSize} from "../../hooks/useWindowsize";
import LogoDark from '../../images/logo_transparent_dark_theme.png';
import LogoLight from '../../images/logo_transparent_light_theme.png';


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const history = useHistory();
    const screenSize = useWindowSize();
    console.log(screenSize);


    useEffect(()=>{
        if(screenSize.width >= 720) setOpenMenu(false);
    })


    const drawMenu = () => {
        if(screenSize.width >= 720){
            return (
                <ul className={styles.menu}>
                    <li> <Link to={'#'}>Page 1</Link></li>
                    <li> <Link to={'#'}>Page 2</Link></li>
                    <li> <Link to={'#'}>Page 3</Link></li>
                </ul>
            );
        }
        return (
            <Collapse padding={'4px 0 0 0'} active={openMenu} onClick={() => {
                setOpenMenu(!openMenu)
            }}/>
        );
    };

    return (
        <header className={styles.header}>
            <div className={styles.subHeader}>
                <img src={LogoLight} alt=""/>
                {drawMenu()}
            </div>
        </header>
    );
};

export default Header;