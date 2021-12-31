import React from 'react';

function BottomCard(props) {
    return (
        <div className='container'>
            <div className='container-wrapper'>
                <h2>{props.question}</h2>
                <p>{props.answer}</p>
            </div>
            
        </div>
    )
}

export default BottomCard;
