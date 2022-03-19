import React from "react";
import { Container, Navbar, Dropdown, Nav, Badge, Button, Image, Row, Col } from "react-bootstrap";
import { BsBagCheck, BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

const Header = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <Navbar bg="dark" expand="lg" variant="dark" id="headerMain">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <BsBagCheck style={{ marginBottom: "8px" }} /> E Commerce App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Dropdown align="end" autoClose="outside">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BsCartPlus style={{ marginBottom: "4px" }} /> Cart{" "}
                <Badge bg="success">{cart.length}</Badge>
              </Dropdown.Toggle>

              <Dropdown.Menu style={{ minWidth: "400px" }}>
                {cart.length === 0 ? (
                  <Dropdown.Item disabled style={{ display: "flex", justifyContent: "center" }}>
                    Empty
                  </Dropdown.Item>
                ) : (
                  <>
                    {cart.map((item) => (
                      <React.Fragment key={item.id}>
                        <Dropdown.Item>
                          <Row>
                            <Col md={2} className="pe-0">
                              <Image
                                src={item.image}
                                thumbnail={true}
                                fluid={true}
                                style={{ width: "60px" }}
                              />
                            </Col>
                            <Col md={8} className="">
                              <div style={{ fontSize: "14px" }}>{item.name}</div>
                              <div style={{ fontSize: "14px" }}>
                                <strong>
                                  <FaRupeeSign size="12px" />
                                  {item.price}
                                </strong>
                              </div>
                            </Col>
                            <Col md={2} style={{ textAlign: "center" }}>
                              <MdDelete
                                size="25px"
                                onClick={() =>
                                  dispatch(removeFromCart(item))
                                }
                              />
                            </Col>
                          </Row>
                        </Dropdown.Item>
                        <Dropdown.Divider />
                      </React.Fragment>
                    ))}
                    <Link to="/cart" className="d-grid gap-2 mx-2">
                      <Button variant="primary">Go to Cart</Button>
                    </Link>
                  </>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
