import React from 'react';
import './MainContent.scss';
import Services from './Services/Services';
import Content from './Content';
import ContentFooter from './ContentFooter/ContentFooter';


const MainContent = () => {
    return (
        <div className='main-content'>
          <Services/>
          <Content/>
          <ContentFooter/>
        </div>
    );
};

export default MainContent;