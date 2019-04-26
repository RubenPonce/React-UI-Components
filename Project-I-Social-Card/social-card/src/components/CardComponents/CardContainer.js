import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';
import HeaderContainer from '../HeaderComponents/HeaderContainer';
import Footer from '../FooterComponents/Footer';
const CardContainer = ()=>{
    return(
        <div className="card-container">
            <HeaderContainer />
            <CardBanner />
            <CardContent />
            <Footer />
        </div>
    )
}
export default CardContainer;