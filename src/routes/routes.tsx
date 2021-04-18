import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { FC } from 'react';

const Header = lazy(() => import('../components/header'));
const Footer = lazy(() => import('../components/footer'));
const NotFound = lazy(() => import('../pages/not-found'));
const Articles = lazy(() => import('../pages/articles'));

export const routes = {
    root: { path: '/', name: 'Home' },
    listArticles: { path: '/articles', name: 'Articles' },
    works: { path: '/works', name: 'Works' },
    contact: { path: '/contact', name: 'Contact' },
    login: { path: '/login', name: 'Login' }
};

export const Routes: FC = () => (
    <Router basename={process.env.REACT_APP_APP_BASE_URL as string}>
        <Suspense fallback=''>
            <Header menuItems={[routes.listArticles, routes.works, routes.contact, routes.login]} />
            <Switch>
                <Route exact path={routes.root.path} render={() => <Articles limit={3} />} />
                <Route exact path={routes.listArticles.path} render={() => <Articles />} />
                <Route render={() => <NotFound />} />
            </Switch>
            <Footer />
        </Suspense>
    </Router>
);
