import React from "react";
import Header from "./components/Header";
import data from "./data.json"
import {Container, Row, Col} from 'react-bootstrap';
import Products from "./components/Products"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: data.products,
      size: '',
      sort: '',
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
              <Row>
                
                  <Products products={this.state.products}/>
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
