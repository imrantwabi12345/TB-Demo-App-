import {lazy, Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import {AppLayout} from "../components/navLayout/Layout.tsx";
import Error404 from "../components/authLayout/404.tsx";
import LoadingPage from "../components/navLayout/LoadingPage.tsx";


export default  function Navigation () {

    const LoginPageView = lazy(() => import('../components/authLayout/LoginPage.tsx'));
    const HomePageView = lazy(() => import('../components/pages/HomeLayout.tsx'));
    const StudyDetailsPageView = lazy(() => import('../components/pages/StudyDetailsLayout.tsx'));

    const routes = [
        {
            path: '/',
            element: <LoginPageView />
        },
        {
            path: '/login',
            element: <LoginPageView />
        },
        {
            element: <AppLayout />,
            children: [
                { path: '/home', element: <HomePageView/>},
                { path: '/study/:id', element: <StudyDetailsPageView/>}
            ]
        }
        ,
        { path: '*', element: <Error404 /> },
    ];

    return (
        <Suspense fallback={<LoadingPage/>}>
            {useRoutes(routes)}
        </Suspense>
    );
}