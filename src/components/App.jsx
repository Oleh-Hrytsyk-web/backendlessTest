import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Header from './Layouts/Header';
import tabs from '../tabs.json'

import './style.css'

const LazyComponent = (path) => {
    const LazyComponent = lazy(() => import(`./${path}`));
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent />
            </Suspense>
        </main>
    );
};

const App = () => {
    return (
        <Router>
            <Header>
                {tabs.map((tab) => (
                    <NavLink key={tab.id} to={`/${tab.id}`}>
                        {tab.title}
                    </NavLink>
                ))}
            </Header>

            <Routes>
                <Route path='/' element={<Navigate to={`/${tabs[0].id}`} replace />} />
                {tabs.map((tab) => (
                    <Route key={tab.id} path={tab.id} element={LazyComponent(tab.path)} />
                ))}
            </Routes>
        </Router>
    );
};

export default App;