import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from '../pages/login/login';
import NotFound from '../pages/notfound/notfound';

const LoginRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' >
                <Route index element={<Login/>} />
                <Route
                    path='signup'
                    element={
                        <React.Suspense fallback={<>...</>}>
                            signup
                        </React.Suspense>
                    }
                />
                <Route path='*' element={<NotFound />} />
            </Route>

        </Routes>
    )    
}

export default LoginRoutes;
