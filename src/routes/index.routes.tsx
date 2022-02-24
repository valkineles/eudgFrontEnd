import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/dashboard/dashboard';
import Layout from '../pages/layout/layout';
import NotFound from '../pages/notfound/notfound';
import LoginRoutes from './login.routes';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route
                    path="about"
                    element={
                        <React.Suspense fallback={<>...</>}>
                            About
                        </React.Suspense>
                    }
                />
                <Route path='*' element={<NotFound />} />
            </Route>

            <Route path='user' element={<LoginRoutes />} />
            {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
    )
};
export default AppRoutes;