import React from 'react';
import HeroPage from './Hero';
import Carousel from '../portfoliocomponents/Carousel';

function HomePage(props) {
    return (
        <React.Fragment>
            <HeroPage title={props.title} subTitle={props.subTitle} text={props.text} />
            <Carousel />
        </React.Fragment>
        );
}

export default HomePage;