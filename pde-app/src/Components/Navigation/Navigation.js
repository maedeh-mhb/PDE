import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Home,Signup,Login } from '../../Constants/Routes';
import HomePage from '../Public/Home/HomePage';
import SignupPage from '../Public/Auth/SignupPage';
import LoginPage from '../Public/Auth/LoginPage';
import TrackingPage from '../Public/TrackingPage/TrackingPage';

const Navigation = () => {
    return (
        <Routes>
              <Route path={Home} element={<HomePage/>}/>     
              <Route path={Signup} element={<SignupPage/>}/> 
              <Route path={Login} element={<LoginPage/>}/> 
              <Route path={Login} element={<TrackingPage/>}/> 
        </Routes>
    );
};

export default Navigation;