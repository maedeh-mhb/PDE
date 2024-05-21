import React from 'react';
import Container from '../Globals/Container';
import './Navigation.scss'
import Menu from './Menu';
import Authentication from './Authentication/Authentication';



const NavigationBar = () => {
    return (
        <>
            <div className='navbar'>
                <Menu/>
                <Authentication/>
            </div>
        </>
    );
};

export default NavigationBar;