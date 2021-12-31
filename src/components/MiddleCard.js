import React from 'react';
import './Middle.css';

function MiddleCard(props) {
    return (
        <div classname='container'>
            <div classname="card">
                <i className={props.icon}/>
                <h1 className='topic'>{props.head}</h1>
                <h2 className='content'>{props.description}</h2>
            </div>
        </div>
    );
}

export default MiddleCard;
