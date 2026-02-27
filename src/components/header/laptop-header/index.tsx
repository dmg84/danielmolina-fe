import React, { FC } from 'react';
import GitHub from '../../../images/github_dark.svg';
import styles from './styles.module.scss';

const LaptopHeader: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <ul className={styles.menu}>
            {children}

            <li>
                <a
                    href={(import.meta.env.VITE_GITHUB_URL as string) || ''}
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
