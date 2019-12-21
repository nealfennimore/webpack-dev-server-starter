import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app';

// eslint-disable-next-line react/no-render-return-value
const render = ( Component ) => ReactDOM.render(
    <Component />,
    document.getElementById( 'app' ),
);

render( App );

if ( module.hot ) {
    module.hot.accept( './src/app', () => {
        // eslint-disable-next-line global-require
        const nextApp = require( './src/app' ).default;
        render( nextApp );
    } );
}
