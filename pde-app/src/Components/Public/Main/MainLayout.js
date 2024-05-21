import React from 'react';
import Container from '../../Globals/Container';
import NavigationBar from '../../Navigation/NavBar';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Globals/Footer/Footer';
import Privacy from '../../Globals/Footer/Privacy';
import './MainLayout.scss'
import { useLocation } from 'react-router-dom';

const MainLayout = () => {
    const {pathname}= useLocation();
    console.log(pathname)
    return (
        <div style={{overflowX:'hidden'}}>
        <div className='mainContainer'>
              <NavigationBar/>
              <Navigation/>
        </div>
        </div>
    );
};

export default MainLayout;