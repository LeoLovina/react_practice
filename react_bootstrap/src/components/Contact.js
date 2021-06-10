import { useState } from 'react';
import { useParams, useRouteMatch } from "react-router";
import { useHistory, Redirect, Switch, Route } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap';
import ContractDetail from './ContactDetail';

export default function Contact({ page, name }) {
    let { id } = useParams();
    let { path, url } = useRouteMatch();
    const [count, setCount] = useState(0);
    const [redirect, setRedirect] = useState(false);

    const history = useHistory();
    const testUseHistory = () => {
        setCount(count + 1);
        if (count % 2 === 0)
            history.push(`/contact/${count}`);
        else
            history.push(`/contact?count=${count}`);
    }
    const testRedirect = () => {
        setRedirect(!redirect);
    }
    return (
        <div>
            <h1>react hook</h1>
            <Container fluid>
                <Row>
                    <Col sm={8}>
                        <Button variant="info" onClick={testUseHistory} >useHistory</Button>
                    </Col>
                    <Col sm={4}>
                        Count = {count}
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Button variant="info" onClick={testRedirect} > 
                            redirect
                        </Button>
                    </Col>
                    <Col sm={4}>
                        {redirect ? <Redirect to="/contact/100" /> : <div> No redirect </div>}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        id = {id}
                    </Col>
                    <Col>
                        url = {url}
                    </Col>
                    <Col>
                    page = {page}
                    </Col>
                    <Col>
                        name = {name}
                    </Col>
                </Row>
            </Container>
            <Button>This is default button</Button>
            <Button variant="secondary" size="sm" disabled>Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:id`}>
                    <h3> topic ID </h3>
                    <ContractDetail />
                </Route>
            </Switch>
        </div>
    );
}