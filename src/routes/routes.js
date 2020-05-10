import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React, {lazy, Suspense} from 'react'

const Header = lazy(() => import('../components/header/header'));
const Footer = lazy(() => import('../components/footer/footer'));
const NotFound = lazy(() => import('../modules/not-found/not-found'));
const Landing = lazy(() => import('../modules/landing/landing'));
const ListArticles = lazy(() => import('../modules/list-articles/listArticles'));

export const paths = {
    root: '/',
    listArticles: '/articles',
};

export const Routes = () => (
    <Router basename={process.env.REACT_APP_APP_BASE_URL}>
        <Suspense fallback=''>
            <Header/>
            <Switch>
                <Route
                    exact
                    path={paths.root}
                    render={props => <Landing {...props} />}
                />
                <Route
                    exact
                    path={paths.listArticles}
                    render={props => <ListArticles {...props} />}
                />
                <Route render={props => <NotFound {...props} />}/>
            </Switch>
            <Footer/>
        </Suspense>
    </Router>
);