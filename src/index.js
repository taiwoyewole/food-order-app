import ReactDOM from 'react-dom';
import React,{ Suspense, Fragment }  from 'react';

import './index.css';
import App from './App';

ReactDOM.render(
    <Fragment>
      <Suspense fallback={<div className='centered'><p>Loading...</p></div>}>
        <App />
        </Suspense>
    </Fragment>,
    document.getElementById('root')
);
