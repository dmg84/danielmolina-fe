import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import {getAllItems} from "./store/actions";
import {useDataReducer} from "./store/reducer";
import {Routes} from "./routes/routes";
import styles from "./app.module.scss";

const App = () => {
    const data = useDataReducer();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data.length) {
            dispatch(getAllItems());
        }
    }, [data, dispatch]);

    return (
        <div className={styles.base}>
            {data.length ?
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
                :
                <h3 className={styles.loading}>Loading data...</h3>}
        </div>
    );
};

export default App;
