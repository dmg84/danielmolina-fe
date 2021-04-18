import React, { FC } from 'react';
import MobileHeader from './mobile-header';
import LaptopHeader from './laptop-header';
import { useWindowSize } from '../../hooks/useWindowsize';
import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';
import styles from './styles.module.scss';
import { MenuItemType } from './types';
import { useHistory } from 'react-router-dom';

type HeaderType = {
    menuItems: MenuItemType[];
};

const Header: FC<HeaderType> = ({ menuItems }) => {
    const mobileResolution = 768;
    const width = useWindowSize();
    const history = useHistory();
    const navigation = (path: string) => {
        history.push(path);
    };

    const drawMenu = () => {
        return menuItems.map((el, key) => {
            return (
                <li key={key}>
                    <span
                        onClick={() => navigation(el.path)}
                        className={history.location.pathname.includes(el.path.toLowerCase()) ? styles.active : ''}
                    >
                        {el.name}
                    </span>
                </li>
            );
        });
    };

    return (
        <>
            <header className={styles.header}>
                <div className={styles.subHeader}>
                    <Link className={styles.name} to={routes.root.path}>
                        <span className={styles.anthracite}>d</span>
                        <span>aniel</span>
                        <span className={styles.anthracite}>M</span>
                        <span>olina</span>
                    </Link>

                    {width > mobileResolution ? (
                        <LaptopHeader>{drawMenu()}</LaptopHeader>
                    ) : (
                        <MobileHeader>{drawMenu()}</MobileHeader>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
