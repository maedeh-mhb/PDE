import React, { useState } from 'react';
import line from '../../../assets/Icons/Line 1.svg';

const Language = () => {
    const isEn= useState(true);

    return (
        <>
            <p>
                English
            </p>
            <span>
                <img src={line}/>
            </span>
            <p>
                Persian
            </p>
        </>
    );
};

export default Language;