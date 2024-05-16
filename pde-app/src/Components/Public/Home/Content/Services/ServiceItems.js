import React from 'react';

const ServiceItems = ({title,logo}) => {
    console.log(title,logo)
    return (
        <div className='service-item'>
          <span>
            <img src={logo}/>
          </span>
             <span>
                {title}
              </span>
            
        </div>
    );
};

export default ServiceItems;