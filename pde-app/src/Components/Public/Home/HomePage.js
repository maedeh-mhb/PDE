import React, { useEffect, useState } from 'react';
import HeaderContent from './Header/HeaderContent';
import Services from './Content/Services/Services';
import MainContent from './Content/MainContent';
import Chat from '../../Globals/Chat';
import Footer from '../../Globals/Footer/Footer';
import Privacy from '../../Globals/Footer/Privacy';
import InnerContainer from '../../Globals/InnerContainer';
import Container from '../../Globals/Container';

const HomePage = () => {
 
console.log("HOME")
    return (
        <Container customClassName='home-layout'>
            <HeaderContent />
            <InnerContainer>
                <MainContent/>         
            </InnerContainer>     
            <div className='chat'>
                    <Chat/>
            </div>      
        </Container>
    );
};

export default HomePage;