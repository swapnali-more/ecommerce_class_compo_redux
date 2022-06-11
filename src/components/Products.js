import React, { Component } from 'react'
import { Button, Card, Col } from 'react-bootstrap';
import CurrencyFormat from "../util"

export default class Products extends Component {
    render(props) {
        return (
            <>
                {this.props.products.map((product) => (
                    <Col xs={4}>
                    <Card key={product._id}>
                        <a href={'#' + product._id}>
                            <Card.Img variant="top" src={product.image} alt={product.title} />
                        </a>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <div className="d-flex align-items-center justify-content-between">
                                <Card.Text className="mb-0">
                                    {CurrencyFormat(product.price)}
                                </Card.Text>
                                <Button variant="primary">Add To Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </>
        )
    }
}