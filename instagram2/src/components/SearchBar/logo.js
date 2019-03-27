import React from 'react';

import Camera from '../SearchBar/camera.png';
import './Header.css';

const Logo = () => {
    return (
        <div className='left'>
            <div className='logoCont'>
                <img className='logoIMG' src={Camera} alt='logo' />  
            </div>
            <div className='logoName'>
                <h3>Instagram</h3>
            </div>
        </div>
    )
}


export default Logo;