import React from 'react';
import styles from './footer.module.scss';
import GitHub from '../../images/github_dark.svg';


const footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.subFooter}>
                Copyright © {new Date().getFullYear()}
                <a href={process.env.REACT_APP_GITHUB_URL}><img className={styles.icon} src={GitHub}
                                                                alt="github icon"/></a>
            </div>
        </footer>
    );
};

export default footer;