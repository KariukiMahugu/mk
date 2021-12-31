import React from 'react';
// import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';
import FooterItem from './FooterItem';



function Footer(Props) {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                Join the Adventure Newsletter to receive our best vacation deals.
                </p>
                <p className='footer-subscription-text'>
                You can Unsubscribe at any time.
                </p>
                <div className='input-areas'>
                <form>
                    <input type='email' name='email'
                        placeholder='Your E-mail' className='footer-input'/>
                    <Button buttonStyle='btn--outline'>Subscribe</Button>    
                </form>

                </div>

            </section>
            <section className='container'>
                <h1 className='heading'><span>meet</span>Our Team</h1>
                    <div className='profiles'>
                        <FooterItem
                        Img = 'images/first/8.JPG'
                        UserName = 'Kariuki Mahugu'
                        Contact = 'qwerty12354'
                        First = 'Devloper'
                        />
                        <FooterItem
                        Img = 'images/first/8.JPG'
                        UserName = 'Kariuki Mahugu'
                        Contact = 'qwerty12354'
                        First = 'Devloper'
                        />
                        <FooterItem
                        Img = 'images/first/8.JPG'
                        UserName = 'Kariuki Mahugu'
                        Contact = 'qwerty12354'
                        First = 'Devloper'
                        />
                        <FooterItem
                        Img = 'images/first/8.JPG'
                        UserName = 'Kariuki Mahugu'
                        Contact = 'qwerty12354'
                        First = 'Devloper'
                        />
                        
                    </div>    
            </section>
            <section>
                <div className='social-icons'>
                <FooterItem
                    link = '/'
                    target ='-blank'
                    label = 'Facebook'
                    icon = 'fab fa-facebook-f'
                    />
                    <FooterItem
                    link = '/'
                    target ='-blank'
                    label = 'Tik-Tok'
                    icon = 'fab fa-tiktok'
                    />
                    <FooterItem
                    link = '/'
                    target ='-blank'
                    label = 'YouTube'
                    icon = 'fab fa-youtube'
                    />
                    <FooterItem
                    link = '/'
                    target ='-blank'
                    label = 'Instagram'
                    icon = 'fab fa-instagram'
                    />  

                </div>
                
                        <small  className='website-right'>Mk Africa © 2021</small>
            </section>
                        
        </div>
    )
}

export default Footer;
