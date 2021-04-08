import { useWindowSize } from './useWindowsize';

export const useMobile: () => boolean = () => {
    const width = useWindowSize();
    return width <= 720;
};
