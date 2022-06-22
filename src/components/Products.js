import React, { Component } from 'react'
import { Button, Card, Col, Container, ListGroup, Modal, Row } from 'react-bootstrap';
import CurrencyFormat from "../util"

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null
        }
    }
    openModal= (product) => {
        this.setState({product});
        console.log(this)
    }
    closeModal = () =>{
        this.setState({product: null})
        console.log(this)
    }
    render(props) {;
        const {product} = this.state;
        console.log(product)
        return (
            <>
                {this.props.products.map((product) => (
                    <Col xs={3} key={product._id}>
                        <Card>
                            <a href={'#' + product._id} onClick={()=> this.openModal(product)}>
                                <Card.Img src={product.image} alt={product.title} />
                            </a>
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <div className="d-flex align-items-center justify-content-between pt-3">
                                    <Card.Text className="mb-0">
                                        {CurrencyFormat(product.price)}
                                    </Card.Text>
                                    <Button onClick={()=> this.props.addToCart(product)} variant="primary">Add To Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                {product &&
                    <Modal show={true} centered>
                        <Modal.Body>
                        <Button onClick={this.closeModal} className="close">
                            X
                        </Button>
                            <Container>
                                <Row className='align-items-center'>
                                    <Col xs={12} md={6}>
                                        <img src={product.image} alt={product.title} className="img-fluid" />
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <h3>{product.title}</h3>
                                        <p>{product.description}</p>

                                        <ListGroup horizontal>
                                            {product.availableSizes.map((e) => {
                                                return (
                                                    <ListGroup.Item>{e}</ListGroup.Item>
                                                )
                                            })}
                                        </ListGroup>

                                        <Button className="mt-4" onClick={()=> {this.closeModal(); this.props.addToCart(product);}}>Add To Cart</Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Modal.Body>
                    </Modal>
                }
            </>
        )
    }
}