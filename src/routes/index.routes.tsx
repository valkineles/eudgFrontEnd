import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../pages/layout/layout';
import Home from '../pages/home/home';
import Spinner from '../common/components/spinner/spinner';

const NotFound = React.lazy(() => import('../pages/notfound/notfound'));
const LoginRoutes = React.lazy(() => import('../routes/login.routes'));

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />

                {/* <Route
                    path='dashboard'
                    element={
                        <React.Suspense fallback={<div>Carregando.....</div>}>
                            <Dashboard />
                        </React.Suspense>

                    }
                />  */}
                {/* <Route
                    path='about'
                    element={
                        <React.Suspense fallback={<div>Carregando.....</div>}>
                            <AboutPage />
                        </React.Suspense>

                    }
                />
     */}
                <Route path="*" element={NotFound} />
            </Route>
            <Route
                path='login/*'
                element={
                    <React.Suspense fallback={<Spinner/>}>
                        <LoginRoutes />
                    </React.Suspense>

                }
            />
        </Routes>)
};
export default AppRoutes;