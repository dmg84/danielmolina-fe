import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { FC } from 'react';

const Header = lazy(() => import('../components/header'));
const Footer = lazy(() => import('../components/footer'));
const NotFound = lazy(() => import('../pages/not-found'));
const Articles = lazy(() => import('../pages/articles'));

export const paths = {
    root: '/',
    listArticles: '/articles'
};

export const Routes: FC = () => (
    <Router basename={process.env.REACT_APP_APP_BASE_URL as string}>
        <Suspense fallback=''>
            <Header />
            <Switch>
                <Route exact path={paths.root} render={() => <Articles />} />
                <Route render={() => <NotFound />} />
            </Switch>
            <Footer />
        </Suspense>
    </Router>
);
