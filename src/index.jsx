import React from 'react';
import { render } from 'react-dom';
import './index.scss';

const App = () => {
    return (
        <h1>Enjoy!</h1>
    );
}

render(<App />, document.getElementById('root'));

console.log('Yep');
