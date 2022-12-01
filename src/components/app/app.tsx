import React from 'react';
import checkImg from '../../assets/images/thunderStorm.png';

import './app.scss';

const App: React.FC = () => {
    return (
        <>
            <h1 className='app'>Enjoy!</h1>
            <img src={checkImg} alt="" />
        </>
    );
}

export default App;
