import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function ProductDetails() {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${product_id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={6} md={4} lg={4} xl={3} xxl={3} >
              <img src={product.image} style={{width:"200px"}} />
              <h1>{product.title}</h1>
              <h2>{product.price}</h2>
              <p>{product.description}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default ProductDetails;
