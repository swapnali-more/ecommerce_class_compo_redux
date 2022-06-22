import React, { Component } from 'react'
import { Col, Form } from 'react-bootstrap';

export default class Filter extends Component {
    render(props) {
        return (
            <>
                <Col xs={4}>
                    <h3 className='mb-0'><strong>{this.props.count}</strong> Products</h3>
                </Col>
                <Col xs={4}>
                    Order
                    <Form.Select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </Form.Select>
                </Col>
                <Col xs={4}>Filter
                    <Form.Select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">All</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </Form.Select>
                </Col>
            </>
        )
    }
}
