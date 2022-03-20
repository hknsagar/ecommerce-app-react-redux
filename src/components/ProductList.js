import React from "react";
import { Card, Col, Row, Button, Badge } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import { FaRupeeSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const ProductList = () => {
  const products = useSelector(state => state.products.products);
  const cart = useSelector(state => state.cart.cart);

  const dispatch = useDispatch();

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
                      dispatch(removeFromCart(product));
                    }}
                  >
                    Remove From Cart
                  </Button>
                ) : (
                  <Button
                    variant="outline-success"
                    onClick={() => {
                      dispatch(addToCart(product));
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
