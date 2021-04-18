import React, { FC } from 'react';
import styles from './styles.module.scss';
import GitHub from '../../../images/github_dark.svg';

const LaptopHeader: FC = ({ children }) => {
    return (
        <ul className={styles.menu}>
            {children}

            <li>
                <a
                    href={process.env.REACT_APP_GITHUB_URL}
                    rel='noopener noreferrer'
                    target={'_blank'}
                    className={styles.iconLink}
                >
                    <img className={styles.icon} src={GitHub} alt='github icon' />
                </a>
            </li>
        </ul>
    );
};

export default LaptopHeader;
