import React from 'react';
import HeroPage from './Hero';
import Content from '../portfoliocomponents/Content';

function AboutPage(props) {
    return (
        <div>
            <HeroPage title={props.title} />
            <Content>
                <p>Hello everyone, How's doing?</p>
                <p>I am Raghav Gupta a student at Chandigarh University and a 
                part-time software engineer. Currently, I am working on my web-development skills as you can see that I have made this portfolio.</p>
                <p>I have also quite experience in some core programming languages like
                C, C++, Java, Python and shell(Bash).</p>
                <p>Well, my goal currently is to become a skilled and professional individual
                in the IT industry and also want to start my own business. The business i can't say what type as I am working on some ideas related to that.</p>
                <p>I do know that starting a business in the modern market is not a child's play and I also know that it will take quite a long time to turn it into a brand but I still want to follow this goal.
                So for the time being see the projects which I am currently working on.<a href="https://portfolio-marcus.netlify.app">here</a></p>
                <p>Thank you very much for reading this and I am very happy to make an acquaintance with you.</p>
            </Content>
        </div>
        );
}

export default AboutPage;