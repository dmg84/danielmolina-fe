import React, { FC } from 'react';
import { Routes } from './routes/routes';

const App: FC = () => {
    console.log(process.env);

    return <Routes />;
};

export default App;
