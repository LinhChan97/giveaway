import React from 'react';
// import NotFound from './pages/NotFound/NotFound';
// import TourDetail from "./components/TourDetail/TourDetail";
// import Tours from './components/Tours/Tours';
// import Content from './components/Content/Content';
import Register from './components/login/Register';
import Login from './components/login/Login';
// import Ourgallery from './components/Ourgallery/Ourgallery';
// import Profile from './components/Profile/Profile';

const routes = [
    // {
    //     path: '/',
    //     exact: true,
    //     main: ({ match }) => <Content match={match} />
    // },
    // {
    //     path: '/tours',
    //     exact: true,
    //     main: ({ match }) => <Ourgallery match={match} />
    // },
    // {
    //     path: '/tours/:id',
    //     exact: false,
    //     main: ({ match }) => <TourDetail match={match} />
    // },
    {
        path: '/register',
        exact: true,
        main: ({ match }) => <Register match={match} />
    },
    {
        path: '/login',
        exact: true,
        main: ({ match }) => <Login match={match} />
    }
    // {
    //     path: '/user/:id/edit',
    //     exact: false,
    //     main: ({ match }) => <Profile match={match} />
    // },
    // {
    //     path: '',
    //     exact: false,
    //     main: () => <NotFound />
    // }
];

export default routes;