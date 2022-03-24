import React from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Spinner from '../common/spinner/spinner';
import Login from '../pages/login/login';

const Forgot = React.lazy(() => import('../pages/forgot/forgot'));
const Signup = React.lazy(() => import('../pages/signup/signup'));



const LoginRoutes = () => {
    const localization = useLocation();
    console.log('-----------------Login Router-------------------', localization);


    return (
        <Routes>
            <Route path='/' >
                <Route index element={<Login />} />

                <Route
                    path='forgot'
                    element={
                        <React.Suspense fallback={<Spinner/>}>
                            <Forgot />
                        </React.Suspense>

                    }
                />
                <Route
                    path='signup'
                    element={
                        <React.Suspense fallback={<Spinner/>}>
                            <Signup />
                        </React.Suspense>

                    }
                />

            </Route>
        </Routes>
    )
}
export default LoginRoutes;

