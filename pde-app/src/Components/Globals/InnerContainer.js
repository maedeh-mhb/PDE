import React from 'react';
import './Container.scss';

const InnerContainer = ({children}) => {
    return (
        <div className='inner'>
            {children}
        </div>
    );
};

export default InnerContainer;