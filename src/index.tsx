import { render } from 'react-dom';
import React      from 'react';

import App        from './components/app/app';

import './index.scss';

render(<App />, document.getElementById('root'));

console.log('Yep');
