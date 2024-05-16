import React from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../Globals/Button';
import '../Navigation.scss';

const LoginButton = () => {
    const navigate = useNavigate()
    const clickHandler =()=>{
        navigate('/Login')}
    return (
        <div>
            <Button onClick={clickHandler} className={'login-but'} text={"Sign Up or Log In"}/>
        </div>
    );
};

export default LoginButton;