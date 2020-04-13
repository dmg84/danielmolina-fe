import React from 'react';
import styles from './footer.module.scss';
import GitHubLight from '../../images/github_light.svg';


const footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.subFooter}>
                Copyright © {new Date().getFullYear()}
                <a href={process.env.REACT_APP_GITHUB_URL}><img className={styles.icon} src={GitHubLight}
                                                                alt="github icon"/></a>
            </div>
        </footer>
    );
};

export default footer;