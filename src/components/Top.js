import React from 'react'
import { Button } from './Button'
import './Top.css'

function Top() {
    return (
        <>
            <div className='section'>
                <div className='container'>
                    <div className='content-section'>
                        <div className='title'>
                            <h1>About Us</h1>
                        </div>
                        <div className='content'>
                            <h3>Mk Africa is a member of the travel and business industry. 
                                We work with you to manage all the elements of transport in an efficient, 
                                cost-effective</h3>
                            <p> and ethical manner. Our company encourages sustainability in 
                                the tourism sector(s) thus we concern ourselves with economic, social and 
                                environmental issues in the industry whilst addressing needs of hosts 
                                communities. We boast of an attention to improve customer(s) experience(s) 
                                through sustainable tourism.
                                Mk Africa guarantees premium professional level of service that exceeds 
                                client(s) expectation(s) through planning and scheduling customizable 
                                itinerary. We cater for corporate, group and leisure travels committing to 
                                our clients in order to make a difference in the industry. We boast of a 
                                premium level in the industry as we are staffed with a great team that 
                                ensures great experience(s) to our client(s).</p>
                            <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'>
                                Read More
                            </Button>
                        </div>
                    </div>
                    <div className='image-section'>
                        <img src="/images/first/6.JPG" alt="ABOUT"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top
