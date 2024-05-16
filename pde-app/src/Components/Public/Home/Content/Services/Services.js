import React from 'react';
import ServiceItems from './ServiceItems';
import ticket from '../../../../../assets/Icons/ticket.svg';
import shop from '../../../../../assets/Icons/shop.svg';
import order from '../../../../../assets/Icons/order.svg';
import rate from '../../../../../assets/Icons/rate.svg';
import './Services.scss'
const Services = () => {
    const services=[
        {title:'TICKET',logo:ticket},{title:'ONLINE SHOP',logo:shop},{title:'ORDER',logo:order},{title:'RATE & SHIP',logo:rate}
    ]
    console.log(services)
    return (
        <div className='service'>
           {services.map((service)=>
            ( <>
                <ServiceItems title={service['title']} logo={service['logo']}/>
              </>
            ))  
            }
        </div>
    );
};

export default Services;