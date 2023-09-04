import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactPage = () => {
    return (
        <Container className='main'>
            <Row>
                <Col>
                    <header>About Me</header>
                    <p>
                        By enrolling in The Coding Bootcamp at The University of Utah, I am passionately committed to transforming my life and pursuing a thriving career rather than settling for a mere job. My unwavering motivation stems from the profound love and responsibility I have towards my family, as they are my constant inspiration to strive for personal growth and excellence. Guided by the footsteps of my tech-savvy younger brother, I have wholeheartedly chosen the path of coding, drawn by the boundless potential it offers in the realm of professional opportunities. I am determined to harness my skills, knowledge, and creativity to unlock a world of innovative possibilities and make a lasting impact in the dynamic landscape of technology.
                    </p>
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter subject here" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Message">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="outline-primary">Send</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};
export default ContactPage;