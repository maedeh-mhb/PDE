import React, { useEffect, useState } from 'react';
import '../HomePage.scss';
import Tracking from './Tracking/Tracking';

const HeaderContent = () => {
  
    return (
        <div className='background-container' >
            <Tracking/>
        </div>
    );
};

export default HeaderContent;