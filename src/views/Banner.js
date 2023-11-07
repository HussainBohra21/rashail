import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
    return (
        <>
            <div className='mainBanner'>
                <Container>
                    <Row>
                        <Col md={7}>
                            <h4>“Go Wild:</h4>
                            <h1>
                                Discover, Explore, Go Wild!”
                            </h1>
                            <p>Welcome to 'Go Wild,' where adventure knows no bounds. With us, you'll embark on journeys of discovery, where the unexplored becomes your playground. Dive into the beauty of untouched landscapes, wander through hidden trails, and unlock the secrets of the world's most extraordinary destinations. Unleash your inner explorer and redefine what's possible. Begin your odyssey today.
                            </p>
                        </Col>
                        <Col md={5}>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );
}

export default Banner;
