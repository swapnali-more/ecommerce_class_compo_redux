import React from "react";
import Header from "./components/Header";
import data from "./data.json"
import { Container, Row, Col } from 'react-bootstrap';
import Products from "./components/Products"
import Filter from "./components/Filter"
import Cart from "./components/Cart";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
      size: '',
      sort: '',
    }
  }

  createOrder = (order) => {
    alert("Need to save" + order.name)
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    })
    localStorage.setItem("cartItems", JSON.stringify(cartItems.filter((x) => x._id !== product._id)))
  }

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart) {
      cartItems.push({...product, count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  }

  sortProducts = (e) => {
    const sort = e.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) => (
        sort === "lowest" ?
          ((a.price > b.price) ? 1 : -1) :
          sort === "highest" ?
            ((a.price < b.price) ? 1 : -1) :
            ((a._id > b._id) ? 1 : -1)
      ))
    }))
  }

  filterProducts = (e) => {
    console.log(e.target.value)
    if (e.target.value === "") {
      this.setState({ size: e.target.value, products: data.products })
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        )
      })
    }
  }

  render() {
    return (
      <>
        <Header />

        <section className="product-main py-3">
          <Container>
            <Row>
              <Col xs={9}>
                <Row className="align-items-center">
                  <Filter count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                  />
                </Row>
                <Row>
                  <Products products={this.state.products} addToCart={this.addToCart} />
                </Row>
              </Col>
              <Col xs={3}>
                <Cart cartItems={this.state.cartItems} removeFromCart={this.removeFromCart} createOrder={this.createOrder} />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default App;
