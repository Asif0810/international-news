import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import LeftNav from '../shared/LeftNav';
import RightNav from '../shared/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="3" className='d-none d-lg-block'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg="6">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightNav></RightNav>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default Main;