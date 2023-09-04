import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import selfPhoto from '../assets/DSC5940.jpg'
import Image from 'react-bootstrap/Image';

const HomePage = () => {
    return (
        <Container className='main'>
            <Row>
                <Col xs={12} md={6}>
                    <header>
                        <h3>Full Stack Developer</h3>
                    </header>
                    <Image className='selfPhoto' src={selfPhoto} />
                </Col>
                <Col xs={12} md={6} className='mainInfo'>
                    <p>
                        I create full stack web applications can
                        be integraded with databases or third party SaaS systems
                    </p>
                    <p>
                        Favorite front end frameworks to
                        use are ReactJS, HandlebarsJS, Bootstrap,
                        and Apollo.
                    </p>
                    Favorite backend technologies to
                    use are ExpressJS, MongoDB, MySQL,
                    NoSQL, and Apollo

                    <p>

                    </p>
                </Col>
            </Row>
        </Container>
    );
};
export default HomePage;