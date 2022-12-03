import React           from 'react';
import thunderStormImg from '../../assets/images/thunderStorm.png';

import './app.scss';

const App: React.FC = () => {
    return (
        <div className="app">
            <div className="app__upside">
                <h1>Enjoy!</h1>
                <img src={thunderStormImg} alt="Cute cloud" />
            </div>
            <>
                <h3>{'Do good =)=)'}</h3>
            </>
        </div>
    );
};

export default App;
