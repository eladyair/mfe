import React, { useRef, useEffect } from 'react';

// Remote Micro Apps
import { mount } from 'marketing/MarketingApp';

const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref}></div>;
};

export default MarketingApp;
