import React from 'react';
import ViewMore from '../../../../Globals/ViewMore';
import './ContentFooter.scss';

const Cards = ({text,img}) => {
    console.log(text)
    return (
        <div className='card-container'>
            <span className='card-img'>
                <img src={img}/>
            </span>
            <span className='card-text'>
                {text}
            </span>
            <span>
                <ViewMore/>
            </span>
            
        </div>
    );
};

export default Cards;