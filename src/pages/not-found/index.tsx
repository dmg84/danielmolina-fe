import React, { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Tumbleweed from '../../images/Tumbleweed.gif';
import { paths } from '../../routes/routes';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
    const [loadedImage, setLoadedImage] = useState(false);

    const preLoadImage = (url: string) => {
        const img = new Image();
        img.onload = () => setLoadedImage(true);
        img.src = url;
    };

    useEffect(() => {
        if (!loadedImage) preLoadImage(Tumbleweed);
    });

    return (
        <main className={styles.base}>
            <div className={styles.container}>
                <>
                    <h2>404 - Page not found</h2>
                    <img
                        className={`${styles.travolta} ${!loadedImage && styles.hidden}`}
                        src={Tumbleweed}
                        alt='tumbleweed meme'
                    />
                    <p>
                        Please, go to <Link to={paths.root}>main page</Link>.
                    </p>
                </>
            </div>
        </main>
    );
};

export default NotFound;
