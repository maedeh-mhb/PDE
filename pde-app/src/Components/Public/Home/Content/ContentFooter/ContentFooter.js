import React from 'react';
import item1 from '../../../../../assets/Images/item1.png';
import item2 from '../../../../../assets/Images/item2.png';
import item3 from '../../../../../assets/Images/item3.png';
import Cards from './Cards';


const ContentFooter = () => {
    const items = [{
        text:'dear dear! PDE company has designed an extension to make it easier to buy from the website of foreign stores. After installing it on your Chrome browser, you can register your request by directly visiting the . . . ', 
        img:item1
    },
    {   
        text:'dear dear! PDE company has designed an extension to make it easier to buy from the website of foreign stores. After installing it on your Chrome browser, you can register your request by directly visiting the . . . ',
        img:item2
    },
    {
        text:'dear dear! PDE company has designed an extension to make it easier to buy from the website of foreign stores. After installing it on your Chrome browser, you can register your request by directly visiting the . . . ',
        img:item3
    }
    ]
    return (
        <div className='content-container'>
           {items.map(({text,img})=>
            ( <>
                <Cards text={text} img={img}/>
              </>
            ))  
            }
        </div>
    );
};

export default ContentFooter;