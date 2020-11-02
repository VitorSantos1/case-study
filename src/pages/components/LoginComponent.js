import React, { Fragment, useContext, useState } from 'react';
import { Alert, Container, Row, Button, Form, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import { AppConsumer, AppContext } from '../../AppContext';
import { postLogin } from '../network/LoginDataFetches';
import { safeClick } from "./ComponentConstants";

const LoginComponent = () => {
    const appContext = useContext(AppContext);
    const routeHistory = useHistory();

    const [loginErrorVisible, setLoginErrorVisible] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    return (
        <Fragment>
            <AppConsumer>
                {() => (
                    <Container className="mt-5">
                        <Row md={2} className="justify-content-center ml-5 mr-5">
                            <Alert variant="danger" show={loginErrorVisible} onClose={() => setLoginErrorVisible(false)} dismissible>
                                Login failed! Please check your e-mail address and password.
                            </Alert>
                        </Row>
                        <Row md={2} className="justify-content-center ml-5 mr-5">
                            <Card>
                                <Card.Body>
                                    <Form>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" value={loginInfo.email} onChange={(event) => (setLoginInfo({
                                                ...loginInfo,
                                                email: event.target.value 
                                            }))} />
                                        </Form.Group>
                            
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" value={loginInfo.password} onChange={(event) => (setLoginInfo({
                                                ...loginInfo,
                                                password: event.target.value 
                                            }))} />
                                        </Form.Group>
                            
                                        <Button variant="primary" type="submit" onClick={(event) => (safeClick(event, postLogin(appContext, loginInfo, setLoginErrorVisible, routeHistory)))}>
                                            Login
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Container>
                    
                )}
            </AppConsumer>
            
        </Fragment>
    );
} 

export default LoginComponent;