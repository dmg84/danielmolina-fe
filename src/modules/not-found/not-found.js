import React, {useEffect, useState} from 'react'
import styles from './not-found.module.scss'
import Travolta from '../../images/404.gif'

const NotFound = () => {
    const [loadedImage, setLoadedImage] = useState(false);

    const preLoadImage = (url) => {
        const img = new Image();
        img.onload = () => setLoadedImage(true);
        img.src = url;
    };


    useEffect(() => {
        if (!loadedImage) preLoadImage(Travolta)
    });

    return (
        <>
            {loadedImage &&
            <main className={styles.container}>
                <h2>404 - Page not found!</h2>
                <img className={styles.travolta} src={Travolta} alt="travolta meme image"/>
            </main>}
        </>
    );
};

export default NotFound