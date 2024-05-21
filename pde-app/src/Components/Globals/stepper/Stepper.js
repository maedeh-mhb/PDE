import React, { useState } from 'react';

const Stepper = () => {
    const steps ={Origin: 'Origin Service Area : DUBAI - UNITED ARAB EMIRATES',
        Destination:'Destination Service Area : CHAOSHAN & HUIZHOU AREA - CHINA, PEOPLES REPUBLIC',
        Delivered :false
    };

    const [activeStep,setActiveStep] = useState(0);
    const [completed,setCompleted] = useState(false);
    
    return (
        <div>
            <div>
                {
                    completed ? <span>
                        <p>
                            Delivered
                        </p>
                        <p>

                        </p>
                    </span> : <span>

                    </span>
                }
            </div>
            {
                steps.map((step,index)=>{
                    <span className={activeStep === index ? 'isActive' : 'deactive'}>
                        <img src={step}/>
                    </span>
                })
            }
        </div>
    );
};

export default Stepper;