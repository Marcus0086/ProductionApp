import React from 'react';
import Card from '../portfoliocomponents/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import github from '../assets/Images/github.png';
import portfolio from '../assets/Images/portfolio.png';
import Hackerrank from '../assets/Images/Hackerrank.png';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub Palace',
                    subTitle: 'The place where i fork',
                    imgSrc: github,
                    link: 'https://github.com/Marcus0086/ProductionApp',
                    selected: false
                },
                {
                    id: 1,
                    title: 'My Portfolio',
                    subTitle: 'Know about me',
                    imgSrc: portfolio,
                    link: 'https://portfolio-marcus.netlify.app',
                    selected: false
                },
                {
                    id: 2,
                    title: 'HackerRank Profile',
                    subTitle: 'My competitive skills',
                    imgSrc: Hackerrank,
                    link: 'https://www.hackerrank.com/marcgupta456',
                    selected: false
                },

            ]
        }
    }

    handleCardClick = (id, card) => {
        //console.log(id);
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        });
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
            );
    }
}

export default Carousel;