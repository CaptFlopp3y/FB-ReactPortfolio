import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
    return (
        <header><Navbar expand={'lg'} className="NavBarMain">
            <Container fluid>
                <Navbar.Brand href="#">
                    <h2>Fabian Barranco</h2>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand`}
                    aria-labelledby={`offcanvasNavbarLabel-expand`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                            Menu
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                            <Nav.Link as={NavLink} to='/contactme'>Contact Page</Nav.Link>
                            <Nav.Link as={NavLink} to='/projects'>Projects</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar></header>
    );
};
export default AppNavbar;