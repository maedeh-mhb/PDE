import React from 'react';
import Container from '../Globals/Container';
import './Navigation.scss'
import Menu from './Menu';
import Authentication from './Authentication/Authentication';



const NavigationBar = () => {
    return (
        <Container>
            <div className='navbar'>
                <Menu/>
                <Authentication/>
            </div>
        </Container>
    );
};

export default NavigationBar;