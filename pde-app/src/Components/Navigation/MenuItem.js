import React from 'react';
import './Navigation.scss';
import vector from '../../assets/Icons/Vector.svg';

const MenuItem = ({title}) => {
    return (
        <div className='menu-item'>
            <p>
              {title}
            </p>
            <span>
                <img src={vector}/>
            </span>
        </div>
    );
};

export default MenuItem;