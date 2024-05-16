import React from 'react';
import './ViewMore.scss';
import vector from '../../assets/Icons/vector2.svg';

const ViewMore = () => {
    return (
        <div className='view'>
            <p>
                view more
            </p>
            <img src={vector}/>
        </div>
    );
};

export default ViewMore;