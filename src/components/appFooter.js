import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import gitHubImg from '../assets/png-github.png';
import linkedInImg from '../assets/linkedIn.webp';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';


const AppFooter = () => {
    return (
        <footer className='mainFooter'>
            <Container>
                <Row>
                    <Col xs={12} md={4}><section className="footer-items">
                        <div className='footer-links'>
                            <a href="https://github.com/CaptFlopp3y?tab=repositories" target='_blank' rel='noopener noreferrer'>
                                <img src={gitHubImg} alt='GitHub link' width='50' height='50' />
                            </a>
                        </div>
                        <div className='footer-links'>
                            <a href="https://www.linkedin.com/in/fabian-barranco-bb7871230/" target='_blank' rel='noopener noreferrer'>
                                <img src={linkedInImg} alt='LinkedIn link' width='50' height='50' />

                            </a>
                        </div>
                    </section></Col>
                    <Col xs={12} md={4}><Offcanvas.Body>
                        <Nav className="footerRoutes">
                            <Nav.Link as={NavLink} to='/FB-ReactPortfolio'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/contactme'>Contact Page</Nav.Link>
                            <Nav.Link as={NavLink} to='/projects'>Projects</Nav.Link>
                        </Nav>
                    </Offcanvas.Body></Col>
                </Row>
            </Container>
        </footer>
    );
};


export default AppFooter