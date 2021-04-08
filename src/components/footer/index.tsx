import React, { FC } from 'react';
import styles from './styles.module.scss';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.subFooter}>
                {'<!-- '} Copyright © {new Date().getFullYear()} {' -->'}
            </div>
        </footer>
    );
};

export default Footer;
