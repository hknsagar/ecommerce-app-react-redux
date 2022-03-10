import React from "react";
import { Card, Col, Container, Image, ListGroup, Row, Button } from "react-bootstrap";
import { CartState } from "../context/CartContext";
import { FaRupeeSign } from "react-icons/fa";
import { BsCart } from "react-icons/bs";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  let deliveryCharges = 0;

  const calculateItemsTotal = () => {
    return cart.reduce((result, item) => {
      result += Number(item.price);
      return result;
    }, 0);
  };

  return (
    <Container fluid>
      <Row className="mt-3">
        {!cart.length ? (
          <Col>
            <Card className="text-center">
              <Card.Body className="text-muted m-5">
                <BsCart size="100"/>
                <Card.Title className="fw-bold fs-3 p-2">Your Cart is Empty</Card.Title>
                {/* <Button variant="primary">Go To Home</Button> */}
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <>
            <Col md={8}>
              <Card>
                <Card.Header className="fw-bold fs-4" style={{ background: "white" }}>
                  My Cart ({cart.length})
                </Card.Header>
                <ListGroup variant="flush">
                  {cart.map((item) => (
                    <ListGroup.Item>
                      <div className="d-flex">
                        <div className="flex-shrink-0">
                          <Image
                            src={item.image}
                            alt="asdf"
                            thumbnail={true}
                            fluid={true}
                            style={{ width: "120px" }}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <div className="d-flex justify-content-between">
                            <div className="fs-5">{item.name}</div>
                            <div className="fs-6 text-muted fst-italic">
                              {item.deliverySpeed === 1
                                ? "Fast Delivery"
                                : `${item.deliverySpeed} days Delivery`}
                            </div>
                          </div>

                          <div className="d-flex justify-content-between">
                            <div className="fw-bold">
                              <FaRupeeSign style={{ marginBottom: "2px" }} size="13px" />
                              {item.price}
                            </div>
                          </div>

                          <div className="d-flex justify-content-end">
                            <div className="">
                              <Button
                                className="fw-bold p-0"
                                variant="link"
                                onClick={() =>
                                  dispatch({ type: "REMOVE_FROM_CART", payload: item })
                                }
                                style={{ textDecoration: "none", color: "red" }}
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Header className="fw-bold fs-4 text-muted" style={{ background: "white" }}>
                  PRICE DETAILS
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <div className="d-flex justify-content-between">
                      <div>
                        Price ({cart.length} {cart.length > 1 ? "items" : "item"})
                      </div>
                      <div className="fw-bold">{calculateItemsTotal()}</div>
                    </div>
                  </Card.Text>

                  <Card.Text>
                    <div className="d-flex justify-content-between">
                      <div>Delivery Charges</div>
                      <div className="fw-bold">Free</div>
                    </div>
                  </Card.Text>
                  <hr />
                  <Card.Text>
                    <div className="d-flex justify-content-between fw-bold">
                      <div>Total Amount</div>
                      <div>{calculateItemsTotal() + deliveryCharges}</div>
                    </div>
                  </Card.Text>
                  <hr />
                  <div className="d-grid">
                    <Button size="lg" variant="warning">
                      Place Order
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
