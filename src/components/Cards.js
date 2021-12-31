import React from 'react';
import CardItem from './CardItems';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>CHECH OUT OUR EPIC DESTINATIONS!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/first/7.jpg'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Adventure'
                        />
                        <CardItem
                        src='images/first/8.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Luxury'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                        src='images/first/6.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Holiday'
                        />
                        <CardItem
                        src='images/first/5.JPG'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Inspiration'
                        />
                        <CardItem
                        src='images/first/4.jpg'
                        text='Exlore with the best Tour Company for the youths of East-Africa'
                        label='Adventure'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    )
};

export default Cards;
