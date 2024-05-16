import React from 'react';
import TrackingBox from './TrackingBox';
import './Tracking.scss';

const Tracking = () => {
    return (
        <div className='tracking'>
            <p>
                Track Your Shipment
            </p>
            <TrackingBox/>
        </div>
    );
};

export default Tracking;