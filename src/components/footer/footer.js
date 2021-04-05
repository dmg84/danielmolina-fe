import React from 'react';
import styles from './footer.module.scss';

const footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.subFooter}>
                {'<!-- '} Copyright © {new Date().getFullYear()} {' -->'}
            </div>
        </footer>
    );
};

export default footer;