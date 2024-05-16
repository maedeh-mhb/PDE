import React from 'react';
import '../Navigation.scss';
import user from '../../../assets/Icons/User.svg';
import Language from './Language';
import SearchBox from './SearchBox';
import LoginButton from './LoginButton';

const Authentication = () => {
    return (
        <div className='auth-container'>
             <div className='search-box'>
                <SearchBox/>
            </div>
            <div className='lan-container'>
            <Language/>
            </div>
            <div className='login-but-container'>
                 <LoginButton />
                 <div className='logo-container'>
                   <img src={user} /> 
                 </div>
               
            </div>
        </div>
    );
};

export default Authentication;