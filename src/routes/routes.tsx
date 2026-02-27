import { FC, lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

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

export const AppRoutes: FC = () => {
    const basename = (import.meta.env.VITE_APP_BASE_URL as string) || '';
    return (
        <Router basename={basename}>
            <Suspense fallback={null}>
                <Header menuItems={[routes.listArticles, routes.works, routes.contact, routes.login]} />
                <Routes>
                    <Route path={routes.root.path} element={<Articles limit={3} />} />
                    <Route path={routes.listArticles.path} element={<Articles />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer />
            </Suspense>
        </Router>
    );
};
