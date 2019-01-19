import React from 'react';
import Home from './pages/home'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
];

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

export default routes;