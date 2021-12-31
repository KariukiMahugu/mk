import React from 'react';
import '../../App.css';
import Banner from '../Banner';
import Cards from '../Cards';
import Footer from '../Footer';

function Home(){
    return(
        <>
            <Banner />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;