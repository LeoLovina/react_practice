import React from 'react';
import { useParams, useRouteMatch } from "react-router";
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function ContractDetail(){
    const {id} = useParams();
    let { path, url } = useRouteMatch();
    return (
        <div>
            This is Contract Detail
            <h1>id = {id} </h1>
            <h1>path = {path} </h1>
            <h1>url = {url} </h1>  
            <Container>
                <Row>
                    <Col>
                    AAA
                    </Col>
                </Row>
            </Container>         
        </div>
    );
}
