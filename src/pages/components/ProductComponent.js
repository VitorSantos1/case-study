import React,{ Fragment } from 'react';
import { Button, Container, Modal, Row, Col } from 'react-bootstrap';

const ProductComponent = (props) => {
    const { product, show, handleClose } = props;

    return (
        <Fragment>
            {product && 
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{product.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col><strong>Name</strong></Col>
                                <Col>{product.name}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Description</strong></Col>
                                <Col>{product.description}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Supplier</strong></Col>
                                <Col>{product.supplier}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Season</strong></Col>
                                <Col>{product.season}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Family</strong></Col>
                                <Col>{product.family}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Subfamily</strong></Col>
                                <Col>{product.subfamily}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Type</strong></Col>
                                <Col>{product.type}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Fabric</strong></Col>
                                <Col>{product.fabric}</Col>
                            </Row>
                            <Row>
                                <Col><strong>Currency Code</strong></Col>
                                <Col>{product.currency_iso3code}</Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>        
                </Modal>
            }
        </Fragment>
    );
}

export default ProductComponent;