import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Fake Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About us</Nav.Link>
                <Nav.Link href="#3">Contact us</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <Container>
        <Row>
          {products.map((product) => {
            return (
              <Col sm={6} md={4} lg={4} xl={3} xxl={3}>
                <Card className="mt-4">
                  <Card.Img className="image  mx-auto d-block" variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Title>${product.price}</Card.Title>
                    <Card.Text className="description">{product.description}</Card.Text>
                    <Link
                      className="nav-link"
                      to={`/product-details/${product.id}`}
                    >
                      <Button variant="outline-dark" className="mx-auto d-block">
                        View product
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
      <footer>
        <hr />
        <p className="text-center">Copyrights 2024-25. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
