import React from 'react';
import Container from '../../Globals/Container';
import InnerContainer from '../../Globals/InnerContainer';
import TrackingBox from '../Home/Header/Tracking/TrackingBox';
import ProcessBox from './ProcessBox';
import Divider from '@mui/material/Divider';
import './TrackingPage.scss';
const TrackingPage = () => {
    return (
      <Container customClassName='flex-container'>
               <InnerContainer>
     <div className='process'>
      <h1>
        Track Your Package
      </h1>
      <div>
        <TrackingBox/>
      </div>
     </div>
     <div className='delivary'>
      <div className='tracking-code'>
      <span>
                    Tracking Code: 3724168744
                </span>
                <span>
                    This shipment is handeled by: PDE Express
                </span>
      </div>
      <Divider/>
     </div>
      </InnerContainer>
      </Container>
 
    );
};

export default TrackingPage;