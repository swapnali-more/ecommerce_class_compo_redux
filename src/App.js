import React from "react";
import Header from "./components/Header";
import data from "./data.json"
import { Container, Row, Col } from 'react-bootstrap';
import Products from "./components/Products"
import Filter from "./components/Filter"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    }
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
                  <Products products={this.state.products} />
                </Row>
              </Col>
              <Col xs={3}>
                Carts
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default App;
