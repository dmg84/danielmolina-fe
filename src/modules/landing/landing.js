import React from 'react';
import styles from './landing.module.scss'
import Articles from "../../components/articles/articles";


const Landing = () => {
    return (
        <div className={styles.base}>
            <div className={`${styles.container} ${styles.customContainer}`}>
                <div className={styles.specialContainer}>
                    <h1 className={styles.specialText}>Full Stack</h1>
                    <h1 className={`${styles.specialText} ${styles.moreGiant}`}>Developer</h1>
                </div>
            </div>

            <div className={`${styles.container}`}>
                <Articles landing={true}/>
            </div>
        </div>
    );
};

export default Landing;