import { useEffect, useState } from 'react';

export const useWindowSize: () => number = () => {
    const getWidth: () => number = () =>
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // save current window width in the state object
    const [width, setWidth] = useState<number>(getWidth());

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setWidth(getWidth());
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return width;
};
