
import React, { lazy, Suspense } from 'react';

const TabLoader = ({ path }) => {
    const TabComponent = lazy(() => import(`./${path}`));
    console.log(path);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TabComponent />
        </Suspense>
    );
};

export default TabLoader;