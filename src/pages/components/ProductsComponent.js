import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Container, Row, Pagination, Table } from 'react-bootstrap';

import { AppContext, AppConsumer } from "../../AppContext";
import { getProducts } from "../network/ProductsDataFetches";
import ProductComponent from './ProductComponent';
import { safeClick } from "./ComponentConstants";

const ProductsComponent = () => {
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [selectedProductIndex, setSelectedProductIndex] = useState();

    const appContext = useContext(AppContext);

    useEffect(() => {
        getProducts(appContext, appContext.appState.jwt);
    }, [...Object.values(appContext).join(",")]);

    return (
        <AppConsumer>
            {({ appState }) => {
                const { products } = appState;

                return (
                    <Fragment>
                        { products && 
                            <Fragment>
                                <Container>
                                    <Row className="justify-content-center mt-5 ml-5 mr-5">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.data && products.data.map((product, index) => (
                                                    <tr>
                                                        <td>
                                                            <a href="/#" onClick={(event) => {
                                                                event.preventDefault();
                                                                setSelectedProductIndex(index);
                                                                handleShowModal();
                                                            }}>{product.id}</a>
                                                        </td>
                                                        <td>{product.name}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Row>
                                    <Row className="justify-content-center mt-1 ml-5 mr-5">
                                        { products.paginator && <Pagination>
                                            { products.paginator.page_number > 2 && <Pagination.First onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, 1)))} /> }
                                            { products.paginator.page_number > 1 && <Pagination.Prev onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.page_number - 1)))} /> }
                                            { products.paginator.page_number > 3 && <Pagination.Item onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, 1)))}>{1}</Pagination.Item> }
                                            { products.paginator.page_number > 4 && <Pagination.Ellipsis onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.page_number - 3)))} /> }

                                            { products.paginator.page_number - 2 > 0 && <Pagination.Item onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.page_number - 2)))}>{products.paginator.page_number - 2}</Pagination.Item> }
                                            { products.paginator.page_number - 1 > 0 && <Pagination.Item onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.page_number - 1)))}>{products.paginator.page_number - 1}</Pagination.Item> }
                                            <Pagination.Item active>{products.paginator.page_number}</Pagination.Item>
                                            { products.paginator.page_number + 1 < products.paginator.total_pages && <Pagination.Item onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.page_number + 1)))}>{products.paginator.page_number + 1}</Pagination.Item> }
                                            { products.paginator.page_number + 2 < products.paginator.total_pages && <Pagination.Item onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.page_number + 2)))}>{products.paginator.page_number + 2}</Pagination.Item> }

                                            { products.paginator.page_number < products.paginator.total_pages - 3 && <Pagination.Ellipsis onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.page_number + 3)))} /> }
                                            { products.paginator.page_number < products.paginator.total_pages && <Pagination.Item onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.total_pages)))}>{products.paginator.total_pages}</Pagination.Item> }
                                            { products.paginator.page_number < products.paginator.total_pages - 1 && <Pagination.Next onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.page_number + 1)))} /> }
                                            { products.paginator.page_number < products.paginator.total_pages && <Pagination.Last onClick={(event) => (safeClick(event, getProducts(appContext, appContext.appState.jwt, products.paginator.total_pages)))} /> }
                                        </Pagination>}
                                    </Row>
                                </Container>

                                { products.data && <ProductComponent product={products.data[selectedProductIndex]} show={showModal} handleClose={handleCloseModal} /> }
                            </Fragment>
                        }
                        
                    </Fragment>
                );
            }}
        </AppConsumer>
    );
}

export default ProductsComponent;