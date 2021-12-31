import React from 'react';
import './ServiceTop.css';

function ServiceTopItem(props) {
    return (
        <div className = 'container'>
            <ul className='card'>
                <li>{props.icon}</li>
                <li>{props.serv}</li>
                <li>{props.serv1}</li>
                <li>{props.serv2}</li>
                <li>{props.serv3}</li>
                <li>{props.serv4}</li>
            </ul>       
        </div>
    )
};

export default ServiceTopItem;
