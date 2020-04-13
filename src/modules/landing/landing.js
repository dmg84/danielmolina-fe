import React from 'react';
import styles from './landing.module.scss'

const Landing = () => {
    return (
        <div className={`${styles.container} ${styles.customContainer}`}>
            <div className={styles.specialContainer}>
                <h1 className={styles.specialText}>Full Stack</h1>
                <h1 className={`${styles.specialText} ${styles.moreGiant}`}>Developer</h1>
            </div>
        </div>
    );
};

export default Landing;