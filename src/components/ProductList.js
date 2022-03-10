import React from "react";
import { CartState } from "../context/CartContext";
import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";

const ProductList = () => {
  const {
    state: { products, cart },
    dispatch,
  } = CartState();

  return (
    <Row xs={1} md={3} className="mt-3">
      {products.map((product) => (
        <Col className="mb-3" key={product.id}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Badge bg="success">
                {Array.from({ length: product.rating }).map((_, idx) => (
                  <BsStarFill key={idx} />
                ))}
              </Badge>
              <div>
                <strong>
                  <FaRupeeSign size="14px" />
                  {product.price}
                </strong>
              </div>
              <div style={{ fontSize: "12px" }}>
                {product.deliverySpeed === 1
                  ? "Fast Delivery"
                  : `${product.deliverySpeed} day Delivery`}
              </div>
              <div className="d-grid gap-2">
                {cart.some((item) => item.id === product.id) ? (
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      dispatch({ type: "REMOVE_FROM_CART", payload: product });
                    }}
                  >
                    Remove From Cart
                  </Button>
                ) : (
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      dispatch({ type: "ADD_TO_CART", payload: product });
                    }}
                    disabled={!product.inStock}
                  >
                    {!product.inStock ? "Out Of Stock" : "Add to Cart"}
                  </Button>
                )}
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;
