import React from 'react';
import styles from './footer.module.scss';
import GitHubLight from '../../images/github_light.svg';
import GitHubDark from '../../images/github_dark.svg';

const footer = () => {
    return (
        <footer className={styles.footer}>
            Copyright © {new Date().getFullYear()}
           <div className={styles.iconContainer}>
               <a href={process.env.REACT_APP_GITHUB_URL}><img className={styles.icon} src={GitHubLight} alt="github icon"/></a>
           </div>
        </footer>
    );
};

export default footer;