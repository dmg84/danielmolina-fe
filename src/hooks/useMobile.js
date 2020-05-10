import {useWindowSize} from "./useWindowsize";

export const useMobile = () => {
    const width = useWindowSize();
    return width <= 720;
};

