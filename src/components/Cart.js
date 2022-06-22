import React, { Component } from 'react'
import { Button, Card, Form } from 'react-bootstrap';
import CurrencyFormat from '../util';

export default class Cart extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            showCheckout: false
        };
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }
        this.props.createOrder(order);
    }
  render(props) {
    const {cartItems} = this.props;
    return (
      <div className='cart'>
        <div>
        {cartItems.length === 0 ?
            <h4>Cart is Empty!!</h4> :
            <h4>You have {cartItems.length} in cart!</h4>
        }
        </div>
        <div>
        {cartItems.map(item => (
            <Card key={item._id} className="flex-row">
                <Card.Img src={item.image} alt={item.title} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <p>{CurrencyFormat(item.price)} x {item.count}</p>
                    <Button onClick={() => this.props.removeFromCart(item)} variant="primary">Remove</Button>
                </Card.Body>
            </Card>
        ))}
        </div>
        <div>
        {cartItems.length !== 0 && (
            <div className='d-flex align-items-center justify-content-between mt-5'>
                <h3 className='mb-0'>Total:{" "}
                  {CurrencyFormat(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}</h3>
                <Button variant="primary"
                    onClick={()=> {
                        this.setState({showCheckout: true})
                    }}
                >Proceed</Button>
            </div>
          )}
        </div>

        <div className='mt-5'>
            {this.state.showCheckout && (
                <Form onSubmit={this.createOrder}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required onChange={this.handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" required onChange={this.handleInput} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="Enter address" required onChange={this.handleInput} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Checkout
                    </Button>
                </Form>
            )}
        </div>
      </div>
    )
  }
}
