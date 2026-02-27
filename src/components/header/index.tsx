import { FC } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../../hooks/useWindowsize';
import { routes } from '../../routes/routes';
import LaptopHeader from './laptop-header';
import MobileHeader from './mobile-header';
import styles from './styles.module.scss';
import { MenuItemType } from './types';

type HeaderType = {
    menuItems: MenuItemType[];
};

const Header: FC<HeaderType> = ({ menuItems }) => {
    const mobileResolution = 768;
    const width = useWindowSize();
    const navigate = useNavigate();
    const location = useLocation();
    const navigation = (path: string) => {
        navigate(path);
    };

    const drawMenu = () => {
        return menuItems.map((el, key) => {
            return (
                <li key={key}>
                    <span
                        onClick={() => navigation(el.path)}
                        className={location.pathname.includes(el.path.toLowerCase()) ? styles.active : ''}
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
