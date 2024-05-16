import React from 'react';
import './Footer.scss';
import pay from '../../../assets/Icons//pay.svg';

const Footer = () => {
    return (
        <div className='footer' >
            <div>
            <img src={pay}/>
         </div>
            <div className='address'>
            <ul >
                <li>
                PDE - IRAN
                </li>
                <li>
                DE Buldings,NO.35,Haghani HWY,before Africa cross st.
                </li>
                <li>
                021-41546 - 021-88202220   
                </li>
                <li>
                PDE - CHINA   
                </li>
                <li>
                深圳市宝安区福永街道翠岗西路翠岗工业二区27栋109智慧包裹   
                </li>
                <li>
                No.109, Building 27, Cuigang Industrial Zone 2, Cuigang West Road, Fuyong Street, Bao 'an District,<br/> Shenzhen , China   
                </li>
                <li>
                (+86)17737949625
                </li>
            </ul>
            </div>
            <div className='tools'>
            <ul >
                <li>
                <h1>
                CUSTOMER TOOLS
                </h1>
                </li>
               <li>
               customer service
               </li>
               <li>
               special service
               </li>
               <li>
               tracking
               </li>
               <li>
               short message service
               </li>
               <li>
               FAQ
               </li>
            </ul>
            </div>
         
        </div>
    );
};

export default Footer;