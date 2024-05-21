import React from 'react';
import  './Container.scss'; 
import Footer from './Footer/Footer';
import Privacy from './Footer/Privacy';

const Container = ({customClassName,...props}) => {
    console.log(customClassName)
    return (
        <>
            <div className={customClassName}>
            {props.children}
           
        </div>
         <div className='footer-container'>
            <Footer/>
            </div>
            <div>
                
            </div>
            <Privacy/>
        </>
    
    );
};

export default Container;