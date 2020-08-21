import React, { StrictMode } from 'react';
import ReactDom from 'react-dom';

import Car from './Car'


const App = () => {
    return(
        <div>
            <Car />
        </div>
    )
}


ReactDom.render(
    <StrictMode>
        <App />
    </StrictMode>, 
    document.getElementById('root')
)