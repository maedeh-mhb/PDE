import React, { useEffect, useState } from 'react';
import HeaderContent from './Header/HeaderContent';
import Services from './Content/Services/Services';
import MainContent from './Content/MainContent';
import Chat from '../../Globals/Chat';
import Footer from '../../Globals/Footer/Footer';
import Privacy from '../../Globals/Footer/Privacy';

const HomePage = () => {
 
console.log("HOME")
    return (
        <div className='home-layout'>
            <HeaderContent />
            <MainContent/>
            <div className='chat'>
                <Chat/>
            </div>

         
        </div>
    );
};

export default HomePage;