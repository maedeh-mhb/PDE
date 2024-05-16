import React from 'react';
import Container from '../../Globals/Container';
import NavigationBar from '../../Navigation/NavBar';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Globals/Footer/Footer';
import Privacy from '../../Globals/Footer/Privacy';
import './MainLayout.scss'

const MainLayout = () => {
    return (
        <div style={{overflowX:'hidden'}}>
        <Container customClassName='mainContainer'>
              <NavigationBar/>
              <Navigation/>
              <div className='footer-container'>
              <Footer/>
              </div>
              <Privacy/>
        </Container>
        </div>
    );
};

export default MainLayout;