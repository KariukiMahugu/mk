import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function FooterItem(Props) {
    return (
        <div>
            <div className='profile'>
                <img src={Props.Img} className='profile-img' alt='FOOTER IMAGE' />
                <h3 className='profile-name'>{Props.UserName}</h3>
                <h5 className='profile-contact'>{Props.Contact}</h5>
                <p className='profile-desc'>{Props.First}</p>
            </div>
            <div >
                <Link className='social-icon' 
                to={Props.link}
                target={Props.target}
                aria-label={Props.label}> 
                    <i className={Props.icon}/>
                </Link>  
            </div>
        </div>
    )
}

export default FooterItem
