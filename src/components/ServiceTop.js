import React from 'react';
import ServiceTopItem from './ServiceTopItem';
import './ServiceTop.css'

function ServiceTop() {
    return (
        <div className = 'container'>
            <h1>Services</h1>
            <div className = 'columns'>
                <ServiceTopItem
                    icon='/'
                    serv='Air Services'
                    serv1='Air Ballon'
                    serv2='Air Booking'
                    serv3='Airport transfers'
                    serv4='Parachutte Fun'
                    
                />
                <ServiceTopItem
                    icon='/'
                    serv='Hotel Services'
                    serv1='Hotel and stays booking'
                    serv2='Hotel transfers'
                    serv3='Camping Utilities'
                    serv4='stay packaging and booking'
                />
                <ServiceTopItem
                    icon='/'
                    serv='Tour Services'
                    serv1='Tours and travel consultancy'
                    serv2='Private travel and safari'
                    serv3='Custom itinerary travel'
                    serv4='Concierge services'
                    />
            </div>
        </div>
    )
}

export default ServiceTop
