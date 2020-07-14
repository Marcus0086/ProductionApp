import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './footer';
import HomePage from '../pages/Home';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';

class Port extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'AdditcoX',
            headerlinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Contact', path: '/contact' },
            ],
            home: {
                title: 'Home Sweet Home',
                subTitle: 'Wanna work with me?',
                text: 'Checkout my projects'
            },
            about: {
                title: 'About me'
            },
            contact: {
                title:'Let\'s Talk'
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>{this.state.title}</Navbar.Brand>
                        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" exact render={() => <AboutPage title={this.state.about.title} />} />
                    <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
                    <Footer />
                </Container>
            </Router>
            );
    }
}

export default Port;