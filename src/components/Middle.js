import React from 'react';
import MiddleCard from './MiddleCard';
import './Middle.css';

function Middle() {
    return (
            <div className='wrapper'> 
                <div className='cardz'>
                    <MiddleCard 
                        icon="fab fa-facebook-f"
                        head="Core Values"
                        description="Quality 
                                    Trust
                                    Ethical 
                                    Creativity 
                                    Efficacy
                                    Communication"
                    /> 
                    <MiddleCard 
                        icon="fab fa-facebook-f"
                        head="Vision"
                        description="To provide excellent services that are incomparable to the 
                                    best tourism companies regionally and globally, 
                                    becoming the no.1 travel company in the region."
                    /> 
                    <MiddleCard 
                        icon="fab fa-facebook-f"
                        head="Mission"
                        description="Provision of high-quality tourism services 
                                    that give the consumers the value for their money"
                    />     
                </div>  
            </div>
    );
}

export default Middle;