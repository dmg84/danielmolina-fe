import {useWindowSize} from "./useWindowsize";

export const useBigScreen = () => {
    const width = useWindowSize();
    return width >= 1400;
};

