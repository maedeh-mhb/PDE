import React from 'react';
import  './Container.scss'; 

const Container = ({customClassName,...props}) => {
    console.log(customClassName)
    return (
        <div className={customClassName}>
            {props.children}
        </div>
    );
};

export default Container;