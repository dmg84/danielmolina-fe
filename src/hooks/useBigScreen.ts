import { useWindowSize } from './useWindowsize';

export const useBigScreen: () => boolean = () => {
    const width = useWindowSize();
    return width >= 1400;
};
