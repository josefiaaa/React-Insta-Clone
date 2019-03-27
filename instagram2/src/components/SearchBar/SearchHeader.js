import React from 'react';

import Logo from './logo';
import InputSearch from './InputSearch';
import IconContainer from './IconContainer';

import './Header.css';

const SearchHeader = () => {
    return (
        <div className='header'>
            <div className='spacer'>
                <Logo />
                <InputSearch />
                <IconContainer />   
            </div>
        </div>
    );
    
};

export default SearchHeader;