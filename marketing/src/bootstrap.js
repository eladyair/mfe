import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';

const mount = element => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        element
    );
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFNITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element.

if (process.env.NODE_ENV === 'development') {
    const root = document.querySelector('#marketing-root');

    // Assuming that the container app doesn't have an element with an id of 'dev-products
    if (root) {
        // We are probably running in isolation
        mount(root);
    }
}

// Context/Situation #2
// We are running this file in development or production
// We are using the 'container' index.html file
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT to try to immediately render the app

export { mount };
