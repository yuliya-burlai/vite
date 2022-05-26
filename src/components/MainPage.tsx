import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { usePostsList } from '../hooks/usePostsList';

export const MainPage = () => {

    const {data} = usePostsList();

    console.log('DATA: '); console.log(data);

    return (
        <Container>
            <Row>
                <Col className="mt-5">
                    <h1>Hello Vite + React 18!</h1>
                </Col>
            </Row>
        </Container>
    );
}