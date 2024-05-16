import React from 'react';
import Button from '../../../../Globals/Button';
import Input from '../../../../Globals/Input';
import './Tracking.scss';
import { useNavigate } from 'react-router-dom';

const TrackingBox = () => {
    const navigate=useNavigate();

    function trackHandler(){
        navigate('/Tracking')
    }
    return (
        <div className='tracking-box'>
            <Button text={'TRACKING'} onClick={trackHandler}/>
            <Input placeholder={'Enter Your Tracking Number'}/>
        </div>
    );
};

export default TrackingBox;