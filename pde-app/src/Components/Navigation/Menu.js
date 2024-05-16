import React from 'react';
import './Navigation.scss'
import MenuItem from './MenuItem';
import logo from '../../assets/Icons/logo.svg';

const pages=['Track','Ship','Services','Support'];
const Menu = () => {
    return (
        <div className='menu-container'>
            <img src={logo}/>
              <div className='menu'>
            {pages.map((page)=>
            ( <>
                <MenuItem title={page}/>
              </>
            ))  
            }
             </div>
        </div>
      
    );
};

export default Menu;